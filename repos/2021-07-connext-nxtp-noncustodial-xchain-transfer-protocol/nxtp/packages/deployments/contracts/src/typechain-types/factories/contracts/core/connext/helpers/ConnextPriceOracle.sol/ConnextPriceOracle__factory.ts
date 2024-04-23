/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../../common";
import type {
  ConnextPriceOracle,
  ConnextPriceOracleInterface,
} from "../../../../../../contracts/core/connext/helpers/ConnextPriceOracle.sol/ConnextPriceOracle";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_wrapped",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ProposedOwnable__onlyOwner_notOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__onlyProposed_notProposedOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__ownershipDelayElapsed_delayNotElapsed",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__proposeNewOwner_invalidProposal",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__proposeNewOwner_noOwnershipChange",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__renounceOwnership_invalidProposal",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__renounceOwnership_noProposal",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "source",
        type: "address",
      },
    ],
    name: "AggregatorUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "oldPrice",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newPrice",
        type: "uint256",
      },
    ],
    name: "DirectPriceUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "proposedOwner",
        type: "address",
      },
    ],
    name: "OwnershipProposed",
    type: "event",
  },
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
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "oldAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAddress",
        type: "address",
      },
    ],
    name: "V1PriceOracleUpdated",
    type: "event",
  },
  {
    inputs: [],
    name: "acceptProposedOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "aggregators",
    outputs: [
      {
        internalType: "contract AggregatorV3Interface",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "assetPrices",
    outputs: [
      {
        internalType: "uint256",
        name: "updatedAt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "delay",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenAddress",
        type: "address",
      },
    ],
    name: "getPriceFromChainlink",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenAddress",
        type: "address",
      },
    ],
    name: "getPriceFromOracle",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenAddress",
        type: "address",
      },
    ],
    name: "getTokenPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isPriceOracle",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
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
    inputs: [
      {
        internalType: "address",
        name: "newlyProposed",
        type: "address",
      },
    ],
    name: "proposeNewOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "proposed",
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
    name: "proposedTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
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
    inputs: [],
    name: "renounced",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "tokenAddresses",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "sources",
        type: "address[]",
      },
    ],
    name: "setAggregators",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_timestamp",
        type: "uint256",
      },
    ],
    name: "setDirectPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_v1PriceOracle",
        type: "address",
      },
    ],
    name: "setV1PriceOracle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "v1PriceOracle",
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
    name: "wrapped",
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
] as const;

const _bytecode =
  "0x00040000000000020009000000000002000000000301001900000060033002700000018c04300197000300000041035500020000000103550000018c0030019d000100000000001f0000000101200190000000580000c13d0000008001000039000000400010043f0000000001000031000000040110008c000000950000413d0000000201000367000000000101043b000000e001100270000001960210009c000003070000613d000001970210009c000000cf0000613d000001980210009c000000e70000613d000001990210009c000001570000613d0000019a0210009c000001700000613d0000019b0210009c000001740000613d0000019c0210009c000001a30000613d0000019d0210009c000001c50000613d0000019e0210009c000001dc0000613d0000019f0210009c000003200000613d000001a00210009c000001f30000613d000001a10210009c000003490000613d000001a20210009c0000020c0000613d000001a30210009c000002370000613d000001a40210009c0000027b0000613d000001a50210009c000002b90000613d000001a60210009c000002d40000613d000001a70210009c000002ed0000613d000001a80110009c000000950000c13d0000000001000416000000000110004c000000950000c13d000000040100008a00000000011000310000018d02000041000000200310008c000000000300001900000000030240190000018d01100197000000000410004c000000000200a0190000018d0110009c00000000010300190000000001026019000000000110004c000000950000c13d062904ad0000040f0000018e0110019700000000001004350000000501000039000000200010043f0000000001000019062904780000040f000000000101041a0000018e01100197000000800010043f0000008001000039000000200200003900000000030000190629049a0000040f0000000001000416000000000110004c000000950000c13d00000000010000310000009f02100039000000200300008a000000000232016f0000007f0320008c000000680000213d000001950100004100000000001004350000004101000039000000040010043f00000024020000390000000001000019062904a40000040f000000400020043f0000001f0210018f00000002030003670000000504100272000000760000613d00000000050000190000000506500210000000000763034f000000000707043b000000800660003900000000007604350000000105500039000000000645004b0000006e0000413d000000000520004c000000850000613d0000000504400210000000000343034f00000003022002100000008004400039000000000504043300000000052501cf000000000525022f000000000303043b0000010002200089000000000323022f00000000022301cf000000000252019f00000000002404350000018d02000041000000200310008c000000000300001900000000030240190000018d01100197000000000410004c000000000200a0190000018d0110009c00000000010300190000000001026019000000000110004c000000950000c13d000000800200043d0000018e012001970000018e0220009c000000980000a13d00000000010000190000000002000019062904a40000040f000000000210004c000000a80000c13d000000400100043d000000440210003900000193030000410000000000320435000000240210003900000015030000390000000000320435000001940200004100000000002104350000000402100039000000200300003900000000003204350000006402000039062904a40000040f0000000303000039000000000203041a0000018f02200197000000000112019f000000000013041b000000000500041a0000018c0100004100000000020004140000018c0420009c0000000001024019000000c00110021000000190011001c7000900000005001d0000018e055001970000800d0200003900000191040000410000000006000411000800000006001d0629061f0000040f0000000101200190000000950000613d00000009010000290000018f011001970000000802000029000000000121019f000000000010041b0000000201000039000000000001041b0000000101000039000000000201041a0000018f02200197000000000021041b0000002001000039000001000010044300000120000004430000010001000039000000400200003900000192030000410629049a0000040f0000000001000416000000000110004c000000950000c13d000000040100008a00000000011000310000018d02000041000000000310004c000000000300001900000000030240190000018d01100197000000000410004c000000000200a0190000018d0110009c00000000010300190000000001026019000000000110004c000000950000c13d0000000201000039000000000201041a000000400100043d0000000000210435000000200200003900000000030000190629049a0000040f0000000001000416000000000110004c000000950000c13d0000000002000031000000040120008a0000018d03000041000000400410008c000000000400001900000000040340190000018d01100197000000000510004c000000000300a0190000018d0110009c00000000010400190000000001036019000000000110004c000000950000c13d00000004010000390000000201100367000000000101043b000001ba0310009c000000950000213d0000000401100039062904b60000040f000400000001001d000500000002001d00000024010000390000000201100367000000000101043b000001ba0210009c000000950000213d00000000020000310000000401100039062904b60000040f000200000001001d000300000002001d000000000100041a0000018e011001970000000002000411000000000121004b000003610000c13d0000000501000039000100000001001d00000000040000190000000501000029000000000114004b000003b50000813d0000000301000029000000000114004b000003f70000813d0000000501400210000000020200002900000000032100190000000202000367000800000003001d000000000332034f000000000303043b000900000003001d0000018e0330009c000000950000213d00000004030000290000000001310019000700000001001d000000000112034f000000000101043b0000018e0210009c000000950000213d00000000001004350000000101000029000000200010043f0000000001000019000600000004001d062904780000040f000000000201041a0000018f022001970000000903000029000000000232019f000000000021041b00000002020003670000000701000029000000000112034f000000000101043b0000018e0310009c000000950000213d0000000803000029000000000232034f000000000202043b0000018e0320009c000000950000213d000000400300043d0000002004300039000000000024043500000000001304350000018c0100004100000000020004140000018c0420009c00000000020180190000018c0430009c00000000010340190000004001100210000000c002200210000000000112019f000001a9011001c70000800d020000390000000103000039000001bc040000410629061f0000040f000000060400002900000001044000390000000101200190000001130000c13d000000950000013d0000000001000416000000000110004c000000950000c13d000000040100008a00000000011000310000018d02000041000000000310004c000000000300001900000000030240190000018d01100197000000000410004c000000000200a0190000018d0110009c00000000010300190000000001026019000000000110004c000000950000c13d0000000301000039000000000101041a0000018e02100197000000400100043d0000000000210435000000200200003900000000030000190629049a0000040f0000000001000416000000000110004c000000950000c13d000001f60000013d0000000001000416000000000110004c000000950000c13d000000040100008a00000000011000310000018d02000041000000600310008c000000000300001900000000030240190000018d01100197000000000410004c000000000200a0190000018d0110009c00000000010300190000000001026019000000000110004c000000950000c13d00000002010003670000000402100370000000000302043b0000018e0230009c000000950000213d0000004402100370000000000502043b0000002401100370000000000401043b000000000100041a0000018e011001970000000002000411000000000121004b000003610000c13d000000000140004c000003730000c13d000000400100043d0000004402100039000001b9030000410000000000320435000000240210003900000009030000390000000000320435000001940200004100000000002104350000000402100039000000200300003900000000003204350000006402000039062904a40000040f0000000001000416000000000110004c000000950000c13d000000040100008a00000000011000310000018d02000041000000200310008c000000000300001900000000030240190000018d01100197000000000410004c000000000200a0190000018d0110009c00000000010300190000000001026019000000000110004c000000950000c13d062904ad0000040f0000018e0110019700000000001004350000000601000039000000200010043f0000000001000019062904780000040f000000000201041a0000000101100039000000000301041a000000400100043d000000200410003900000000003404350000000000210435000000400200003900000000030000190629049a0000040f0000000001000416000000000110004c000000950000c13d000000040100008a00000000011000310000018d02000041000000000310004c000000000300001900000000030240190000018d01100197000000000410004c000000000200a0190000018d0110009c00000000010300190000000001026019000000000110004c000000950000c13d000000400100043d00000001020000390000000000210435000000200200003900000000030000190629049a0000040f0000000001000416000000000110004c000000950000c13d000000040100008a00000000011000310000018d02000041000000000310004c000000000300001900000000030240190000018d01100197000000000410004c000000000200a0190000018d0110009c00000000010300190000000001026019000000000110004c000000950000c13d000000400100043d000001b1020000410000000000210435000000200200003900000000030000190629049a0000040f0000000001000416000000000110004c000000950000c13d000000040100008a00000000011000310000018d02000041000000200310008c000000000300001900000000030240190000018d01100197000000000410004c000000000200a0190000018d0110009c00000000010300190000000001026019000000000110004c000000950000c13d062904ad0000040f062905640000040f000000400300043d00000000001304350000002002000039000000000103001900000000030000190629049a0000040f0000000001000416000000000110004c000000950000c13d000000040100008a00000000011000310000018d02000041000000200310008c000000000300001900000000030240190000018d01100197000000000410004c000000000200a0190000018d0110009c00000000010300190000000001026019000000000110004c000000950000c13d00000004010000390000000201100367000000000301043b0000018e0130009c000000950000213d000000000100041a0000018e021001970000000001000411000000000212004b000003610000c13d0000000104000039000000000504041a0000018e02500197000000000232004b000002300000c13d0000000202000039000000000202041a000000000220004c000003b90000c13d000000000131004b0000039c0000c13d000000400100043d000001b00200004100000000002104350000000402000039062904a40000040f0000000001000416000000000110004c000000950000c13d000000040100008a00000000011000310000018d02000041000000000310004c000000000300001900000000030240190000018d01100197000000000410004c000000000200a0190000018d0110009c00000000010300190000000001026019000000000110004c000000950000c13d0000000102000039000000000302041a0000018e013001970000000004000411000000000141004b000003660000c13d000900000004001d000700000003001d000800000002001d000001ac0100004100000000001004390629048b0000040f0000000204000039000000000204041a000000000321004b000003420000413d0000000001210049000001ad0110009c0000036e0000413d000600000004001d000000000400041a0000018c0100004100000000020004140000018c0320009c0000000001024019000000c00110021000000190011001c7000500000004001d0000018e054001970000800d020000390000000303000039000001910400004100000009060000290629061f0000040f0000000101200190000000950000613d00000005010000290000018f011001970000000902000029000000000121019f000000000010041b0000000601000029000000000001041b00000007010000290000018f011001970000000802000029000000000012041b0000000001000019000000000200001900000000030000190629049a0000040f0000000001000416000000000110004c000000950000c13d000000040100008a00000000011000310000018d02000041000000200310008c000000000300001900000000030240190000018d01100197000000000410004c000000000200a0190000018d0110009c00000000010300190000000001026019000000000110004c000000950000c13d00000004030000390000000201300367000000000401043b0000018e0140009c000000950000213d000000000100041a0000018e011001970000000002000411000000000121004b000003610000c13d000000000503041a000000400100043d00000020021000390000000000420435000700000005001d0000018e0250019700000000002104350000018c02000041000900000003001d0000000003000414000800000004001d0000018c0430009c00000000030280190000018c0410009c00000000010280190000004001100210000000c002300210000000000112019f000001a9011001c70000800d020000390000000103000039000001aa040000410629061f0000040f000000080400002900000009030000290000000101200190000000950000613d00000007010000290000018f01100197000000000141019f000000000013041b0000000001000019000000000200001900000000030000190629049a0000040f0000000001000416000000000110004c000000950000c13d000000040100008a00000000011000310000018d02000041000000200310008c000000000300001900000000030240190000018d01100197000000000410004c000000000200a0190000018d0110009c00000000010300190000000001026019000000000110004c000000950000c13d062904ad0000040f062904d30000040f000000400300043d0000002004300039000000000024043500000000001304350000004002000039000000000103001900000000030000190629049a0000040f0000000001000416000000000110004c000000950000c13d000000040100008a00000000011000310000018d02000041000000000310004c000000000300001900000000030240190000018d01100197000000000410004c000000000200a0190000018d0110009c00000000010300190000000001026019000000000110004c000000950000c13d0000000101000039000000000101041a0000018e02100197000000400100043d0000000000210435000000200200003900000000030000190629049a0000040f0000000001000416000000000110004c000000950000c13d000000040100008a00000000011000310000018d02000041000000000310004c000000000300001900000000030240190000018d01100197000000000410004c000000000200a0190000018d0110009c00000000010300190000000001026019000000000110004c000000950000c13d000000000100041a0000018e0110019800000000020000190000000102006039000000400100043d0000000000210435000000200200003900000000030000190629049a0000040f0000000001000416000000000110004c000000950000c13d000000040100008a00000000011000310000018d02000041000000000310004c000000000300001900000000030240190000018d01100197000000000410004c000000000200a0190000018d0110009c00000000010300190000000001026019000000000110004c000000950000c13d0000000401000039000000000101041a0000018e02100197000000400100043d0000000000210435000000200200003900000000030000190629049a0000040f0000000001000416000000000110004c000000950000c13d000000040100008a00000000011000310000018d02000041000000000310004c000000000300001900000000030240190000018d01100197000000000410004c000000000200a0190000018d0110009c00000000010300190000000001026019000000000110004c000000950000c13d000000000200041a0000018e012001970000000003000411000000000131004b000003610000c13d000800000003001d000700000002001d0000000201000039000600000001001d000000000101041a000900000001001d000001ac0100004100000000001004390629048b0000040f0000000903000029000000000231004b0000036b0000813d000001950100004100000000001004350000001101000039000000040010043f00000024020000390000000001000019062904a40000040f0000000001000416000000000110004c000000950000c13d000000040100008a00000000011000310000018d02000041000000000310004c000000000300001900000000030240190000018d01100197000000000410004c000000000200a0190000018d0110009c00000000010300190000000001026019000000000110004c000000950000c13d000000000100041a0000018e02100197000000400100043d0000000000210435000000200200003900000000030000190629049a0000040f000000400100043d000001bb0200004100000000002104350000000402000039062904a40000040f000000400100043d000001ab0200004100000000002104350000000402000039062904a40000040f0000000001310049000001b10110009c000003950000213d000000400100043d000001b40200004100000000002104350000000402000039062904a40000040f000600000004001d000700000003001d000001ac01000041000800000001001d0000000000100439000900000005001d0629048b0000040f00000008020000290000000000200439000800000001001d0629048b0000040f00000009030000290000000802000029000000000232004b000003be0000a13d000000000231004b000003420000413d00000000013100490000003c0110008c000004020000413d000000400100043d0000004402100039000001b803000041000000000032043500000024021000390000000d030000390000000000320435000001940200004100000000002104350000000402100039000000200300003900000000003204350000006402000039062904a40000040f000000000130004c000003d10000c13d000000400100043d000001b30200004100000000002104350000000402000039062904a40000040f000001ac010000410000000000100439000800000003001d000900000004001d000700000005001d0629048b0000040f0000000203000039000000000013041b00000007010000290000018f011001970000000805000029000000000151019f0000000902000029000000000012041b0000018c0100004100000000020004140000018c0420009c0000000001024019000000c00110021000000190011001c70000800d02000039000001af040000410629061f0000040f0000000101200190000000950000613d0000000001000019000000000200001900000000030000190629049a0000040f000000400100043d000001ae0200004100000000002104350000000402000039062904a40000040f000000000213004b000003420000413d0000000001130049000000030110008c000003fe0000413d000000400100043d0000004402100039000001b5030000410000000000320435000000240210003900000009030000390000000000320435000001940200004100000000002104350000000402100039000000200300003900000000003204350000006402000039062904a40000040f0000000101000039000900000001001d000000000101041a000500000001001d0000018e01100198000003f20000c13d0000018c0100004100000000020004140000018c0320009c0000000001024019000000c00110021000000190011001c70000800d0200003900000003030000390000019104000041000000080500002900000000060000190629061f0000040f0000000101200190000000950000613d00000007010000290000018f01100197000000000010041b0000000601000029000000000001041b00000005010000290000018f011001970000000902000029000000000012041b0000000001000019000000000200001900000000030000190629049a0000040f000000400100043d000001b20200004100000000002104350000000402000039062904a40000040f000001950100004100000000001004350000003201000039000000040010043f00000024020000390000000001000019062904a40000040f000001ac0100004100000000001004390629048b0000040f000900000001001d000000070100002900000000001004350000000601000039000800000001001d000000200010043f0000000001000019062904780000040f0000000101100039000000000101041a000000400200043d00000020032000390000000000130435000000400120003900000006030000290000000000310435000000070100002900000000001204350000018c0100004100000000030004140000018c0430009c00000000030180190000018c0420009c00000000010240190000004001100210000000c002300210000000000112019f000001b6011001c70000800d020000390000000103000039000001b7040000410629061f0000040f00000007030000290000000101200190000000950000613d00000000003004350000000801000029000000200010043f0000000001000019062904780000040f00000001011000390000000602000029000000000021041b0000000001000019062904780000040f0000000902000029000000000021041b0000000001000019000000000200001900000000030000190629049a0000040f000000000201001900000001010000390000000a03000039000000000420004c000004400000613d00000001042001900000000004030019000000010400603900000000411400a9000000010220027000000000433300a9000004370000013d000000000001042d0002000000000002000200000006001d000100000005001d0000018c050000410000018c0630009c000000000305801900000040033002100000018c0640009c00000000040580190000006004400210000000000334019f0000018c0410009c0000000001058019000000c001100210000000000113019f062906240000040f0000000109000029000000000301001900000060033002700000018c033001970000000205000029000000000453004b00000000050340190000001f0450018f0000000505500272000004640000613d000000000600001900000005076002100000000008790019000000000771034f000000000707043b00000000007804350000000106600039000000000756004b0000045c0000413d000000010220018f000000000640004c000004740000613d0000000505500210000000000651034f00000000055900190000000304400210000000000705043300000000074701cf000000000747022f000000000606043b0000010004400089000000000646022f00000000044601cf000000000474019f0000000000450435000100000003001f00030000000103550000000001020019000000000001042d0000018c0200004100000000030004140000018c0430009c00000000030280190000018c0410009c00000000010280190000004001100210000000c002300210000000000112019f000001a9011001c70000801002000039062906240000040f0000000102200190000004880000613d000000000101043b000000000001042d00000000010000190000000002000019062904a40000040f0000018c0100004100000000020004140000018c0320009c0000000001024019000000c001100210000001bd011001c70000800b02000039062906240000040f0000000102200190000004970000613d000000000101043b000000000001042d00000000010000190000000002000019062904a40000040f0000018c040000410000018c0510009c0000000001048019000000400110021000000000013100190000018c0320009c0000000002048019000000600220021000000000012100190000062a0001042e0000018c030000410000018c0420009c00000000020380190000018c0410009c000000000103801900000040011002100000006002200210000000000112019f0000062b0001043000000004010000390000000201100367000000000101043b000001be0210009c000004b30000813d000000000001042d00000000010000190000000002000019062904a40000040f0000001f031000390000018d04000041000000000523004b000000000500001900000000050440190000018d062001970000018d03300197000000000763004b000000000400a019000000000363013f0000018d0330009c00000000030500190000000003046019000000000330004c000004d00000613d0000000203100367000000000303043b000001ba0430009c000004d00000213d000000050430021000000020011000390000000004410019000000000224004b000004d00000213d0000000002030019000000000001042d00000000010000190000000002000019062904a40000040f00040000000000020000018e02100198000004da0000c13d0000000301000039000000000101041a0000018e021001970000000001020019000400000001001d000100000002001d00000000002004350000000601000039000000200010043f0000000001000019062904780000040f0000000101100039000000000201041a000000000120004c000004f50000613d000200000002001d000001ac0100004100000000001004390629048b0000040f000300000001001d0000000001000019062904780000040f0000000303000029000000000101041a000000000213004b000005280000413d000000000113004900000001020000390000003c0110008c0000000201000029000005270000413d0000000401000029062905640000040f0000000202000039000000000310004c000005270000c13d0000000401000039000000000101041a0000018e02100198000005250000613d000000400500043d000001bf0100004100000000001504350000000401500039000000010300002900000000003104350000000001000414000000040320008c000005100000613d000000240400003900000020060000390000000003050019000400000005001d0000000405000029062904410000040f0000000405000029000000000110004c000005390000613d0000000101000031000000200210008c000000200200003900000000020140190000001f02200039000000600320018f0000000002530019000000000332004b00000000030000190000000103004039000001ba0420009c0000052f0000213d00000001033001900000052f0000c13d000000400020043f000000200110008c000005360000413d00000003020000390000000001050433000000000310004c000005270000c13d00000000010000190000000002000019000000000001042d000001950100004100000000001004350000001101000039000000040010043f00000024020000390000000001000019062904a40000040f000001950100004100000000001004350000004101000039000000040010043f00000024020000390000000001000019062904a40000040f00000000010000190000000002000019062904a40000040f0000000302000367000000400100043d00000001040000310000001f0340018f0000000504400272000005480000613d000000000500001900000005065002100000000007610019000000000662034f000000000606043b00000000006704350000000105500039000000000645004b000005400000413d000000000530004c000005570000613d0000000504400210000000000242034f00000000044100190000000303300210000000000504043300000000053501cf000000000535022f000000000202043b0000010003300089000000000232022f00000000023201cf000000000252019f00000000002404350000000102000031062904a40000040f0000004e0210008c0000055d0000813d062904340000040f000000000001042d000001950100004100000000001004350000001101000039000000040010043f00000024020000390000000001000019062904a40000040f00030000000000020000018e0110019700000000001004350000000501000039000000200010043f0000000001000019062904780000040f000000000101041a0000018e021001980000000001000019000005ed0000613d000000400300043d000001c00100004100000000001304350000000001000414000000040420008c000005800000613d0000000404000039000000a006000039000300000002001d0000000005030019000200000003001d062904410000040f00000002030000290000000302000029000000000110004c0000000001000019000005ed0000613d0000000101000031000000a00410008c000000a00400003900000000040140190000001f04400039000001e00440018f0000000005340019000000000445004b00000000060000190000000106004039000001ba0450009c000005f10000213d0000000104600190000005f10000c13d000000400050043f0000009f0110008c000005ee0000a13d0000000005030433000001c10150009c000005ee0000213d0000002001300039000000000401043300000080013000390000000006010433000001c10160009c000005ee0000213d000000000140004c0000000001000019000005ed0000613d000000000156004b0000000001000019000005ed0000413d00000060013000390000000003010433000000000130004c0000000001000019000005ed0000613d0000003d0100008a000000000113004b000005e00000213d000001ac0100004100000000001004390000003c01300039000200000001001d000100000004001d000300000002001d0629048b0000040f00000003020000290000000203000029000000000131004b0000000001000019000005ed0000213d000000400300043d000001c20100004100000000001304350000000001000414000000040420008c000005c20000613d00000004040000390000002006000039000300000003001d0000000305000029062904410000040f0000000303000029000000000110004c000005f80000613d0000000101000031000000200210008c000000200200003900000000020140190000001f02200039000000600420018f0000000002340019000000000442004b00000000050000190000000105004039000001ba0420009c000005f10000213d0000000104500190000005f10000c13d000000400020043f000000200110008c000005ee0000413d0000000001030433000000ff0210008c000005ee0000213d000000130210008c000005e70000813d0000001201100089062905590000040f0000000002010019000000010400002900000000314200a900000000434100d9000000000232004b000005ed0000613d000001950100004100000000001004350000001101000039000000040010043f00000024020000390000000001000019062904a40000040f000000120110008a062905590000040f000000000210004c000006180000613d000000010200002900000000211200d9000000000001042d00000000010000190000000002000019062904a40000040f000001950100004100000000001004350000004101000039000000040010043f00000024020000390000000001000019062904a40000040f0000000302000367000000400100043d00000001040000310000001f0340018f0000000504400272000006070000613d000000000500001900000005065002100000000007610019000000000662034f000000000606043b00000000006704350000000105500039000000000645004b000005ff0000413d000000000530004c000006160000613d0000000504400210000000000242034f00000000044100190000000303300210000000000504043300000000053501cf000000000535022f000000000202043b0000010003300089000000000232022f00000000023201cf000000000252019f00000000002404350000000102000031062904a40000040f000001950100004100000000001004350000001201000039000000040010043f00000024020000390000000001000019062904a40000040f00000622002104210000000102000039000000000001042d0000000002000019000006210000013d00000627002104230000000102000039000000000001042d0000000002000019000006260000013d00000629000004320000062a0001042e0000062b00010430000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffff8000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000008be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e000000002000000000000000000000000000000000000000000000000000000007a65726f2077726170706564206164647265737321000000000000000000000008c379a0000000000000000000000000000000000000000000000000000000004e487b710000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000fe10c98d000000000000000000000000000000000000000000000000000000003cf52ffb000000000000000000000000000000000000000000000000000000003f9fb5050000000000000000000000000000000000000000000000000000000050e70d4800000000000000000000000000000000000000000000000000000000538e573c000000000000000000000000000000000000000000000000000000005e901bdf000000000000000000000000000000000000000000000000000000005e9a523c0000000000000000000000000000000000000000000000000000000066331bba000000000000000000000000000000000000000000000000000000006a42b8f800000000000000000000000000000000000000000000000000000000715018a600000000000000000000000000000000000000000000000000000000856d562d000000000000000000000000000000000000000000000000000000008da5cb5b00000000000000000000000000000000000000000000000000000000b1f8100d00000000000000000000000000000000000000000000000000000000c5b350df00000000000000000000000000000000000000000000000000000000cb45c4f200000000000000000000000000000000000000000000000000000000d02641a000000000000000000000000000000000000000000000000000000000d1851c9200000000000000000000000000000000000000000000000000000000d232c22000000000000000000000000000000000000000000000000000000000112cdab9020000000000000000000000000000000000004000000000000000000000000042e2900b37aa23ca681e13d6efc8018181fa216ca6676cf2b983e00e056afc2c234fe4e200000000000000000000000000000000000000000000000000000000796b89b91644bc98cd93958e4c9038275d622183e25ac5af08cc6b5d955391320000000000000000000000000000000000000000000000000000000000093a8123780cca000000000000000000000000000000000000000000000000000000006ab4d119f23076e8ad491bc65ce85f017fb0591dce08755ba8591059cc51737a945f6e7e000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000093a8023295ef900000000000000000000000000000000000000000000000000000000392cc0fc000000000000000000000000000000000000000000000000000000009380a17c00000000000000000000000000000000000000000000000000000000696e2066757475726500000000000000000000000000000000000000000000000200000000000000000000000000000000000060000000000000000000000000e2c8fb681c257e4e8df5ef1c464cff10ce6b072837628c9b6de5e7239a483e5d6261642074696d657374616d70000000000000000000000000000000000000006261642070726963650000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffffffffffff8d450dd80000000000000000000000000000000000000000000000000000000089baabef7dfd0683c0ac16fd2a8431c51b49fbe654c3f7b5ef19763e2ccd88f202000002000000000000000000000000000000040000000000000000000000000000000000000000000000010000000000000000000000000000000000000000d02641a000000000000000000000000000000000000000000000000000000000feaf968c0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffffffffffffffff313ce56700000000000000000000000000000000000000000000000000000000";

type ConnextPriceOracleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ConnextPriceOracleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ConnextPriceOracle__factory extends ContractFactory {
  constructor(...args: ConnextPriceOracleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _wrapped: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ConnextPriceOracle> {
    return super.deploy(
      _wrapped,
      overrides || {}
    ) as Promise<ConnextPriceOracle>;
  }
  override getDeployTransaction(
    _wrapped: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_wrapped, overrides || {});
  }
  override attach(address: string): ConnextPriceOracle {
    return super.attach(address) as ConnextPriceOracle;
  }
  override connect(signer: Signer): ConnextPriceOracle__factory {
    return super.connect(signer) as ConnextPriceOracle__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ConnextPriceOracleInterface {
    return new utils.Interface(_abi) as ConnextPriceOracleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ConnextPriceOracle {
    return new Contract(address, _abi, signerOrProvider) as ConnextPriceOracle;
  }
}