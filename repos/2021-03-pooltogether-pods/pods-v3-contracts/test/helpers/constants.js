const prizePoolDAI = {
  prizePool: "0xEBfb47A7ad0FD6e57323C8A42B2E5A6a4F68fc1a",
  token: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
  ticket: "0x334cBb5858417Aee161B53Ee0D5349cCF54514CF",
  faucet: "0xF362ce295F2A4eaE4348fFC8cDBCe8d729ccb8Eb",
  pool: "0x0cEC1A9154Ff802e7934Fc916Ed7Ca50bDE6844e",
  reward: "0x0cEC1A9154Ff802e7934Fc916Ed7Ca50bDE6844e", // POOL
};

const prizePoolUSDC = {
  prizePool: "0xde9ec95d7708b8319ccca4b8bc92c0a3b70bf416",
  token: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
  ticket: "0xd81b1a8b1ad00baa2d6609e0bae28a38713872f7",
  faucet: "0xbd537257fad96e977b9e545be583bbf7028f30b9",
  pool: "0x0cEC1A9154Ff802e7934Fc916Ed7Ca50bDE6844e",
  reward: "0x0cEC1A9154Ff802e7934Fc916Ed7Ca50bDE6844e", // POOL
};


const TEST_CALCULATE_POOL_REWARDS_POD_BALANCE_EXPECTATION =
  "107632735200694300000";
const TEST_CALCULATE_POOL_REWARDS_POD_BALANCE_EXPECTATION_ABOVE =
  "108632735200694300000";
const TEST_CALCULATE_POOL_REWARDS_POD_BALANCE_EXPECTATION_BELOW =
  "106632735200694300000";

module.exports = {
  TEST_CALCULATE_POOL_REWARDS_POD_BALANCE_EXPECTATION,
  TEST_CALCULATE_POOL_REWARDS_POD_BALANCE_EXPECTATION_ABOVE,
  TEST_CALCULATE_POOL_REWARDS_POD_BALANCE_EXPECTATION_BELOW,
  prizePoolDefault: prizePoolDAI,
  prizePoolDAI,
};