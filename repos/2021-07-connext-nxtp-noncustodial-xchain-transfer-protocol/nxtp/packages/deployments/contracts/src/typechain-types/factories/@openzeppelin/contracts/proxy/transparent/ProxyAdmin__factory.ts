/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  ProxyAdmin,
  ProxyAdminInterface,
} from "../../../../../@openzeppelin/contracts/proxy/transparent/ProxyAdmin";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "contract TransparentUpgradeableProxy",
        name: "proxy",
        type: "address",
      },
      {
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "changeProxyAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract TransparentUpgradeableProxy",
        name: "proxy",
        type: "address",
      },
    ],
    name: "getProxyAdmin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract TransparentUpgradeableProxy",
        name: "proxy",
        type: "address",
      },
    ],
    name: "getProxyImplementation",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract TransparentUpgradeableProxy",
        name: "proxy",
        type: "address",
      },
      {
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "upgrade",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract TransparentUpgradeableProxy",
        name: "proxy",
        type: "address",
      },
      {
        internalType: "address",
        name: "implementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x0004000000000002000300000000000200000000030100190000006003300270000000df0430019700030000004103550002000000010355000000df0030019d000100000000001f0000008001000039000000400010043f0000000101200190000000560000c13d0000000002000031000000040120008c000002060000413d0000000201000367000000000301043b000000e003300270000000e50430009c000000eb0000613d000000e60430009c0000011e0000613d000000e70430009c000001450000613d000000e80430009c000001820000613d000000e90430009c000000720000613d000000ea0130009c0000019a0000613d000000eb0130009c000001f00000613d000000ec0130009c000002060000c13d0000000001000416000000000110004c000002060000c13d000000040100008a0000000001100031000000ed02000041000000200310008c00000000030000190000000003024019000000ed01100197000000000410004c000000000200a019000000ed0110009c00000000010300190000000001026019000000000110004c000002060000c13d00000004010000390000000201100367000000000201043b000000e20120009c000002060000213d000000f901000041000000800010043f0000000001000414000000040320008c0000000003000019000000460000613d000000800300003900000000040000190000000005000019037702ac0000040f000000000110004c00000000030000190000000103006039000300000003001d037703200000040f00000003020000290000000102200190000002060000c13d0000002003100039000000000101043300000000023100190000000001030019037703590000040f000000e202100197000000400100043d000000000021043500000020020000390000000003000019037702ef0000040f0000000001000416000000000110004c000002060000c13d000000000200041a000000e0012001970000000006000411000000000161019f000000000010041b000000df010000410000000003000414000000df0430009c0000000001034019000000c001100210000000e1011001c7000000e2052001970000800d020000390000000303000039000000e3040000410377036d0000040f0000000101200190000002060000613d00000020010000390000010000100443000001200000044300000100010000390000004002000039000000e403000041037702ef0000040f000000040320008a000000ed04000041000000600530008c00000000050000190000000005044019000000ed03300197000000000630004c000000000400a019000000ed0330009c00000000030500190000000003046019000000000330004c000002060000c13d0000000403100370000000000803043b000000e20380009c000002060000213d0000002403100370000000000903043b000000e20390009c000002060000213d0000004403100370000000000303043b000000f40430009c000002060000213d0000002304300039000000ed05000041000000000624004b00000000060000190000000006058019000000ed02200197000000ed04400197000000000724004b0000000005008019000000000224013f000000ed0220009c00000000020600190000000002056019000000000220004c000002060000c13d0000000402300039000000000121034f000000000101043b000000f50210009c000002330000813d000000bf02100039000000200500008a000000000252016f000000f40420009c000002330000213d000200000005001d000000400020043f000000800010043f000000240330003900000000023100190000000004000031000000000242004b000002060000213d0000001f0210018f00000002033003670000000504100272000000b90000613d00000000050000190000000506500210000000000763034f000000000707043b000000a00660003900000000007604350000000105500039000000000645004b000000b10000413d000100000009001d000300000008001d000000000520004c000000ca0000613d0000000504400210000000000343034f0000000302200210000000a004400039000000000504043300000000052501cf000000000525022f000000000303043b0000010002200089000000000323022f00000000022301cf000000000252019f0000000000240435000000a00110003900000000000104350377030d0000040f000000f201000041000000000010043900000003010000290000000400100443037702e00000040f000000000110004c0000000103000029000002060000613d000000400400043d000000240140003900000040020000390000000000210435000000f6010000410000000000140435000000040140003900000000003104350000004401400039000000800200043d0000000000210435000100000004001d00000064014000390000000003000019000000000423004b0000023f0000813d0000000004130019000000a005300039000000000505043300000000005404350000002003300039000000e30000013d0000000001000416000000000110004c000002060000c13d000000040100008a0000000001100031000000ed02000041000000200310008c00000000030000190000000003024019000000ed01100197000000000410004c000000000200a019000000ed0110009c00000000010300190000000001026019000000000110004c000002060000c13d00000004010000390000000201100367000000000201043b000000e20120009c000002060000213d000000400300043d000000ee0100004100000000001304350000000001000414000000040420008c00000000040000190000010e0000613d00000000040000190000000005000019037702ac0000040f000000000110004c00000000040000190000000104006039000300000004001d037703200000040f00000003020000290000000102200190000002060000c13d0000002003100039000000000101043300000000023100190000000001030019037703590000040f000000e202100197000000400100043d000000000021043500000020020000390000000003000019037702ef0000040f0000000001000416000000000110004c000002060000c13d000000040100008a0000000001100031000000ed02000041000000000310004c00000000030000190000000003024019000000ed01100197000000000410004c000000000200a019000000ed0110009c00000000010300190000000001026019000000000110004c000002060000c13d0377030d0000040f000000000200041a000000e001200197000000000010041b000000df010000410000000003000414000000df0430009c0000000001034019000000c001100210000000e1011001c7000000e2052001970000800d020000390000000303000039000000e30400004100000000060000190377036d0000040f0000000101200190000002060000613d000000000100001900000000020000190000000003000019037702ef0000040f0000000001000416000000000110004c000002060000c13d000000040100008a0000000001100031000000ed02000041000000400310008c00000000030000190000000003024019000000ed01100197000000000410004c000000000200a019000000ed0110009c00000000010300190000000001026019000000000110004c000002060000c13d00000002010003670000000402100370000000000302043b000000e20230009c000002060000213d0000002401100370000000000201043b000000e20120009c000002060000213d000300000003001d000200000002001d0377030d0000040f000000f201000041000000000010043900000003010000290000000400100443037702e00000040f00000002030000290000000302000029000000000110004c000002060000613d000000400500043d000000f8010000410000000000150435000000040150003900000000003104350000000001000414000000040320008c0000017c0000613d00000024040000390000000003050019000300000005001d00000003050000290000000006000019037702750000040f0000000305000029000000000110004c000001d00000613d0000000001050019037703020000040f000000000100001900000000020000190000000003000019037702ef0000040f0000000001000416000000000110004c000002060000c13d000000040100008a0000000001100031000000ed02000041000000000310004c00000000030000190000000003024019000000ed01100197000000000410004c000000000200a019000000ed0110009c00000000010300190000000001026019000000000110004c000002060000c13d000000000100041a000000e202100197000000400100043d000000000021043500000020020000390000000003000019037702ef0000040f0000000001000416000000000110004c000002060000c13d000000040100008a0000000001100031000000ed02000041000000400310008c00000000030000190000000003024019000000ed01100197000000000410004c000000000200a019000000ed0110009c00000000010300190000000001026019000000000110004c000002060000c13d00000002010003670000000402100370000000000302043b000000e20230009c000002060000213d0000002401100370000000000201043b000000e20120009c000002060000213d000300000003001d000200000002001d0377030d0000040f000000f201000041000000000010043900000003010000290000000400100443037702e00000040f00000002040000290000000302000029000000000110004c000002060000613d000000400300043d000000f3010000410000000000130435000000040130003900000000004104350000000001000414000000040420008c000002310000613d0000002404000039000300000003001d00000003050000290000000006000019037702750000040f0000000303000029000000000110004c000002310000c13d0000000302000367000000400100043d00000001040000310000001f0340018f0000000504400272000001df0000613d000000000500001900000005065002100000000007610019000000000662034f000000000606043b00000000006704350000000105500039000000000645004b000001d70000413d000000000530004c000001ee0000613d0000000504400210000000000242034f00000000044100190000000303300210000000000504043300000000053501cf000000000535022f000000000202043b0000010003300089000000000232022f00000000023201cf000000000252019f00000000002404350000000102000031037702f90000040f0000000001000416000000000110004c000002060000c13d000000040100008a0000000001100031000000ed02000041000000200310008c00000000030000190000000003024019000000ed01100197000000000410004c000000000200a019000000ed0110009c00000000010300190000000001026019000000000110004c000002060000c13d00000004010000390000000201100367000000000201043b000000e20120009c000002090000a13d00000000010000190000000002000019037702f90000040f000300000002001d0377030d0000040f0000000306000029000000000160004c0000021f0000c13d000000400100043d0000006402100039000000ef0300004100000000003204350000004402100039000000f0030000410000000000320435000000240210003900000026030000390000000000320435000000f10200004100000000002104350000000402100039000000200300003900000000003204350000008402000039037702f90000040f000000000200041a000000e001200197000000000161019f000000000010041b000000df010000410000000003000414000000df0430009c0000000001034019000000c001100210000000e1011001c7000000e2052001970000800d020000390000000303000039000000e3040000410377036d0000040f0000000101200190000001410000c13d000002060000013d000000f40130009c0000023a0000a13d000000f70100004100000000001004350000004101000039000000040010043f00000024020000390000000001000019037702f90000040f000000400030043f000000000100001900000000020000190000000003000019037702ef0000040f00000000011200190000000000010435000000000100041400000000030004160000000304000029000000040440008c0000026c0000613d0000001f022000390000000204000029000000000242016f0000006404200039000000000230004c000002520000c13d0000000302000029000000010300002900000000050300190000000006000019037702750000040f0000026a0000013d000000df020000410000000106000029000000df0560009c000000000502001900000000050640190000004005500210000000df0640009c00000000040280190000006004400210000000000454019f000000df0510009c0000000001028019000000c001100210000000000141019f000000e1011001c70000800902000039000000030400002900000000050000190377036d0000040f00000000030100190000006003300270000100df0030019d0003000000010355000000010120018f000000000110004c000001d00000613d0000000101000029000000f40110009c000002330000213d0000000101000029000000400010043f000000000100001900000000020000190000000003000019037702ef0000040f0002000000000002000200000006001d000100000005001d000000df05000041000000df0630009c00000000030580190000004003300210000000df0640009c00000000040580190000006004400210000000000334019f000000df0410009c0000000001058019000000c001100210000000000113019f0377036d0000040f000000010900002900000000030100190000006003300270000000df033001970000000205000029000000000453004b00000000050340190000001f0450018f0000000505500272000002980000613d000000000600001900000005076002100000000008790019000000000771034f000000000707043b00000000007804350000000106600039000000000756004b000002900000413d000000010220018f000000000640004c000002a80000613d0000000505500210000000000651034f00000000055900190000000304400210000000000705043300000000074701cf000000000747022f000000000606043b0000010004400089000000000646022f00000000044601cf000000000474019f0000000000450435000100000003001f00030000000103550000000001020019000000000001042d0002000000000002000200000005001d000100000004001d000000df04000041000000df0530009c0000000003048019000000df0510009c0000000001048019000000c0011002100000004003300210000000000113019f000000fa011001c7037703720000040f000000010900002900000000030100190000006003300270000000df033001970000000205000029000000000453004b00000000050340190000001f0450018f0000000505500272000002cc0000613d000000000600001900000005076002100000000008790019000000000771034f000000000707043b00000000007804350000000106600039000000000756004b000002c40000413d000000010220018f000000000640004c000002dc0000613d0000000505500210000000000651034f00000000055900190000000304400210000000000705043300000000074701cf000000000747022f000000000606043b0000010004400089000000000646022f00000000044601cf000000000474019f0000000000450435000100000003001f00030000000103550000000001020019000000000001042d000000df010000410000000002000414000000df0320009c0000000001024019000000c001100210000000fb011001c70000800202000039037703720000040f0000000102200190000002ec0000613d000000000101043b000000000001042d00000000010000190000000002000019037702f90000040f000000df04000041000000df0510009c000000000104801900000040011002100000000001310019000000df0320009c000000000204801900000060022002100000000001210019000003780001042e000000df03000041000000df0420009c0000000002038019000000df0410009c000000000103801900000040011002100000006002200210000000000112019f0000037900010430000000f50210009c000003060000813d000000400010043f000000000001042d000000f70100004100000000001004350000004101000039000000040010043f00000024020000390000000001000019037702f90000040f000000000100041a000000e2011001970000000002000411000000000121004b000003130000c13d000000000001042d000000400100043d0000004402100039000000fc030000410000000000320435000000f1020000410000000000210435000000240210003900000020030000390000000000320435000000040210003900000000003204350000006402000039037702f90000040f00000060010000390000000102000032000003510000613d000000f50120009c000003520000813d0000003f01200039000000200300008a000000000331016f000000400100043d0000000003310019000000000413004b00000000040000190000000104004039000000f40530009c000003520000213d0000000104400190000003520000c13d000000400030043f00000000002104350000002002100039000000030300036700000001050000310000001f0450018f0000000505500272000003420000613d000000000600001900000005076002100000000008720019000000000773034f000000000707043b00000000007804350000000106600039000000000756004b0000033a0000413d000000000640004c000003510000613d0000000505500210000000000353034f00000000025200190000000304400210000000000502043300000000054501cf000000000545022f000000000303043b0000010004400089000000000343022f00000000034301cf000000000353019f0000000000320435000000000001042d000000f70100004100000000001004350000004101000039000000040010043f00000024020000390000000001000019037702f90000040f0000000002120049000000ed030000410000001f0420008c00000000040000190000000004032019000000ed02200197000000000520004c0000000003008019000000ed0220009c00000000020400190000000002036019000000000220004c0000036a0000613d0000000001010433000000e20210009c0000036a0000213d000000000001042d00000000010000190000000002000019037702f90000040f00000370002104210000000102000039000000000001042d00000000020000190000036f0000013d00000375002104230000000102000039000000000001042d0000000002000019000003740000013d0000037700000432000003780001042e00000379000104300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffffffffffffffffffffffffffff00000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffffffffffffffffffffffffffffffffffff8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000f3b7dead00000000000000000000000000000000000000000000000000000000715018a6000000000000000000000000000000000000000000000000000000007eff275e000000000000000000000000000000000000000000000000000000008da5cb5b000000000000000000000000000000000000000000000000000000009623609d0000000000000000000000000000000000000000000000000000000099a88ec400000000000000000000000000000000000000000000000000000000f2fde38b00000000000000000000000000000000000000000000000000000000204e1c7a8000000000000000000000000000000000000000000000000000000000000000f851a4400000000000000000000000000000000000000000000000000000000064647265737300000000000000000000000000000000000000000000000000004f776e61626c653a206e6577206f776e657220697320746865207a65726f206108c379a0000000000000000000000000000000000000000000000000000000001806aa1896bbf26568e884a7374b41e002500962caba6a15023a8d90e8508b833659cfe600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffffffffffff00000000000000000000000000000000000000000000000100000000000000004f1ef286000000000000000000000000000000000000000000000000000000004e487b71000000000000000000000000000000000000000000000000000000008f283970000000000000000000000000000000000000000000000000000000005c60da1b00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000400000000000000000000000002000002000000000000000000000000000000240000000000000000000000004f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572";

type ProxyAdminConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ProxyAdminConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ProxyAdmin__factory extends ContractFactory {
  constructor(...args: ProxyAdminConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ProxyAdmin> {
    return super.deploy(overrides || {}) as Promise<ProxyAdmin>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ProxyAdmin {
    return super.attach(address) as ProxyAdmin;
  }
  override connect(signer: Signer): ProxyAdmin__factory {
    return super.connect(signer) as ProxyAdmin__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ProxyAdminInterface {
    return new utils.Interface(_abi) as ProxyAdminInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ProxyAdmin {
    return new Contract(address, _abi, signerOrProvider) as ProxyAdmin;
  }
}