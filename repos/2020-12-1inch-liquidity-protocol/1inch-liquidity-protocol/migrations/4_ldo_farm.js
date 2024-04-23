const MooniswapFactory = artifacts.require('./MooniswapFactory.sol');
const FarmingRewards = artifacts.require('./inch/FarmingRewards.sol');
const TokenMock = artifacts.require('./mocks/TokenMock.sol');

const TOKENS = {
    ETH: '0x0000000000000000000000000000000000000000',
    LDO: '0x5A98FcBEA516Cf06857215779Fd812CA3beF1B32',
    STETH: '0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84',
    INCH: '0x111111111117dC0aa78b770fA6A738034120C302',
};

const TOKEN = {
    mainnet: TOKENS.INCH,
    'mainnet-fork': TOKENS.INCH,
};

const POOL_OWNER = {
    mainnet: '0x5E89f8d81C74E311458277EA1Be3d3247c7cd7D1',
    'mainnet-fork': '0x5E89f8d81C74E311458277EA1Be3d3247c7cd7D1',
};

const REWARD_DISTRIBUTION = {
    mainnet: '0x5E89f8d81C74E311458277EA1Be3d3247c7cd7D1',
    'mainnet-fork': '0x5E89f8d81C74E311458277EA1Be3d3247c7cd7D1',
};

const POOLS = {
    // mainnet: {
    //     'LDO-STETH': [TOKENS.LDO, TOKENS.STETH],
    // },
    // 'mainnet-fork': {
    //     'LDO-STETH': [TOKENS.LDO, TOKENS.STETH],
    // },
};

const FARM_REWARDS = {
    // mainnet: {
    //     'LDO-STETH': [TOKENS.LDO, TOKENS.STETH, '0'],
    // },
    // 'mainnet-fork': {
    //     'LDO-STETH': [TOKENS.LDO, TOKENS.STETH, '0'],
    // },
};

const FACTORY = {
    mainnet: '0xbAF9A5d4b0052359326A6CDAb54BABAa3a3A9643',
    'mainnet-fork': '0xbAF9A5d4b0052359326A6CDAb54BABAa3a3A9643',
};

module.exports = function (deployer, network) {
    return deployer.then(async () => {
        if (network === 'test' || network === 'coverage') {
            // migrations are not required for testing
            return;
        }

        const account = '0x11799622F4D98A24514011E8527B969f7488eF47';
        console.log('Deployer account: ' + account);
        console.log('Deployer balance: ' + (await web3.eth.getBalance(account)) / 1e18 + ' ETH');

        const token = await TokenMock.at(TOKEN[network]);

        const mooniswapFactory = await MooniswapFactory.at(FACTORY[network]);

        if (POOLS[network] !== undefined) {
            const pools = {};
            for (const [pair, [token0, token1]] of Object.entries(POOLS[network])) {
                const pool = await mooniswapFactory.pools(token0, token1);
                pools[pair] = pool;
            }

            for (const [pair] of Object.entries(FARM_REWARDS[network])) {
                const pool = pools[pair];
                if (!pool) {
                    console.log(`Skipping farm deployment for pool ${pair}`);
                    continue;
                }

                console.log(`Deploying farm for pool (${pair}): ${pool}`);
                const poolRewards = await deployer.deploy(FarmingRewards, pool, token.address, REWARD_DISTRIBUTION[network]);
                await poolRewards.transferOwnership(POOL_OWNER[network]);
            }
        }
    });
};
