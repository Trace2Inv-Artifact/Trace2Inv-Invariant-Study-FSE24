/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  WatcherManager,
  WatcherManagerInterface,
} from "../../../contracts/messaging/WatcherManager";

const _abi = [
  {
    inputs: [],
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
        name: "watcher",
        type: "address",
      },
    ],
    name: "WatcherAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "watcher",
        type: "address",
      },
    ],
    name: "WatcherRemoved",
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
        name: "_watcher",
        type: "address",
      },
    ],
    name: "addWatcher",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "",
        type: "address",
      },
    ],
    name: "isWatcher",
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
    inputs: [
      {
        internalType: "address",
        name: "_watcher",
        type: "address",
      },
    ],
    name: "removeWatcher",
    outputs: [],
    stateMutability: "nonpayable",
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
] as const;

const _bytecode =
  "0x0002000000000002000500000000000200010000000103550000006001100270000000ab0010019d0000008001000039000000400010043f00000001012001900000006a0000c13d0000000001000031000000040110008c000001d90000413d0000000101000367000000000101043b000000e001100270000000b10210009c000000a80000613d000000b20210009c000000900000613d000000b30210009c000000dc0000613d000000b40210009c000000f30000613d000000b50210009c000001170000613d000000b60210009c0000013b0000613d000000b70210009c000001530000613d000000b80210009c0000017f0000613d000000b90210009c000001af0000613d000000ba0210009c000001c80000613d000000bb0110009c000001d90000c13d0000000001000416000000000110004c000001d90000c13d000000040100008a0000000001100031000000bc02000041000000200310008c00000000030000190000000003024019000000bc01100197000000000410004c000000000200a019000000bc0110009c00000000010300190000000001026019000000000110004c000001d90000c13d00000004010000390000000101100367000000000101043b000000ad03100197000000ad0110009c000001d90000213d000000000100041a000000ad011001970000000002000411000000000121004b000001f60000c13d00000000003004350000000301000039000400000001001d000000200010043f0000000001000019000500000003001d02a702680000040f000000000101041a000000ff011001900000021a0000c13d000000050100002900000000001004350000000401000029000000200010043f000000000100001902a702680000040f000000000201041a000001000300008a000000000232016f00000001022001bf000000000021041b000000400100043d00000005020000290000000000210435000000ab020000410000000003000414000000ab0430009c0000000003028019000000ab0410009c00000000010280190000004001100210000000c002300210000000000112019f000000bd011001c70000800d020000390000000103000039000000cc0400004102a7029d0000040f0000000101200190000001d90000613d0000025f0000013d0000000001000416000000000110004c000001d90000c13d000000000400041a000000ab010000410000000002000414000000ab0320009c0000000001024019000000c001100210000000ac011001c7000500000004001d000000ad054001970000800d020000390000000303000039000000ae040000410000000006000411000400000006001d02a7029d0000040f0000000101200190000001d90000613d0000000501000029000000af011001970000000402000029000000000121019f000000000010041b0000000201000039000000000001041b0000000101000039000000000201041a000000af02200197000000000021041b00000020010000390000010000100443000001200000044300000100010000390000004002000039000000b00300004102a7028a0000040f0000000001000416000000000110004c000001d90000c13d000000040100008a0000000001100031000000bc02000041000000000310004c00000000030000190000000003024019000000bc01100197000000000410004c000000000200a019000000bc0110009c00000000010300190000000001026019000000000110004c000001d90000c13d0000000201000039000000000201041a000000400100043d00000000002104350000002002000039000000000300001902a7028a0000040f0000000001000416000000000110004c000001d90000c13d000000040100008a0000000001100031000000bc02000041000000200310008c00000000030000190000000003024019000000bc01100197000000000410004c000000000200a019000000bc0110009c00000000010300190000000001026019000000000110004c000001d90000c13d00000004010000390000000101100367000000000101043b000000ad03100197000000ad0110009c000001d90000213d000000000100041a000000ad011001970000000002000411000000000121004b000001dc0000c13d00000000003004350000000301000039000400000001001d000000200010043f0000000001000019000500000003001d02a702680000040f000000000101041a000000ff01100190000002280000c13d000000400100043d0000004402100039000000bf030000410000000000320435000000240210003900000006030000390000000000320435000000c0020000410000000000210435000000040210003900000020030000390000000000320435000000640200003902a702940000040f0000000001000416000000000110004c000001d90000c13d000000040100008a0000000001100031000000bc02000041000000000310004c00000000030000190000000003024019000000bc01100197000000000410004c000000000200a019000000bc0110009c00000000010300190000000001026019000000000110004c000001d90000c13d000000400100043d000000c30200004100000000002104350000002002000039000000000300001902a7028a0000040f0000000001000416000000000110004c000001d90000c13d000000040100008a0000000001100031000000bc02000041000000000310004c00000000030000190000000003024019000000bc01100197000000000410004c000000000200a019000000bc0110009c00000000010300190000000001026019000000000110004c000001d90000c13d000000000100041a000000ad011001970000000002000411000000000121004b000001dc0000c13d000000400100043d0000004402100039000000ca03000041000000000032043500000024021000390000000a030000390000000000320435000000c0020000410000000000210435000000040210003900000020030000390000000000320435000000640200003902a702940000040f0000000001000416000000000110004c000001d90000c13d000000040100008a0000000001100031000000bc02000041000000200310008c00000000030000190000000003024019000000bc01100197000000000410004c000000000200a019000000bc0110009c00000000010300190000000001026019000000000110004c000001d90000c13d00000004010000390000000101100367000000000101043b000000ad0210009c000001d90000213d00000000001004350000000301000039000000200010043f000000000100001902a702680000040f000000000101041a000000ff011001900000000002000019000000010200c039000000400100043d00000000002104350000002002000039000000000300001902a7028a0000040f0000000001000416000000000110004c000001d90000c13d000000040100008a0000000001100031000000bc02000041000000000310004c00000000030000190000000003024019000000bc01100197000000000410004c000000000200a019000000bc0110009c00000000010300190000000001026019000000000110004c000001d90000c13d000000000100041a000000ad02100197000000400100043d00000000002104350000002002000039000000000300001902a7028a0000040f0000000001000416000000000110004c000001d90000c13d000000040100008a0000000001100031000000bc02000041000000200310008c00000000030000190000000003024019000000bc01100197000000000410004c000000000200a019000000bc0110009c00000000010300190000000001026019000000000110004c000001d90000c13d00000004010000390000000101100367000000000101043b000000ad03100197000000ad0110009c000001d90000213d000000000100041a000000ad021001970000000001000411000000000212004b000001dc0000c13d0000000104000039000000000504041a000000ad02500197000000000232004b000001780000c13d0000000202000039000000000202041a000000000220004c000002630000c13d000000000131004b000002460000c13d000000400100043d000000c8020000410000000000210435000000040200003902a702940000040f0000000001000416000000000110004c000001d90000c13d000000040100008a0000000001100031000000bc02000041000000000310004c00000000030000190000000003024019000000bc01100197000000000410004c000000000200a019000000bc0110009c00000000010300190000000001026019000000000110004c000001d90000c13d0000000102000039000000000302041a000000ad013001970000000004000411000000000141004b000001ea0000c13d000400000004001d000200000003001d000300000002001d000000c201000041000500000001001d000000000010043902a7027b0000040f0000000202000039000100000002001d000000000202041a000000050300002900000000003004390000000001210049000500000001001d02a7027b0000040f0000000502000029000000000112004b000001ef0000a13d000000c50100004100000000001004350000001101000039000000040010043f0000002402000039000000000100001902a702940000040f0000000001000416000000000110004c000001d90000c13d000000040100008a0000000001100031000000bc02000041000000000310004c00000000030000190000000003024019000000bc01100197000000000410004c000000000200a019000000bc0110009c00000000010300190000000001026019000000000110004c000001d90000c13d0000000101000039000000000101041a000000ad02100197000000400100043d00000000002104350000002002000039000000000300001902a7028a0000040f0000000001000416000000000110004c000001d90000c13d000000040100008a0000000001100031000000bc02000041000000000310004c00000000030000190000000003024019000000bc01100197000000000410004c000000000200a019000000bc0110009c00000000010300190000000001026019000000000110004c000001e10000613d0000000001000019000000000200001902a702940000040f000000400100043d000000c9020000410000000000210435000000040200003902a702940000040f000000000100041a000000ad0110019800000000020000190000000102006039000000400100043d00000000002104350000002002000039000000000300001902a7028a0000040f000000400100043d000000c1020000410000000000210435000000040200003902a702940000040f000000c30120009c000001fb0000213d000000400100043d000000c4020000410000000000210435000000040200003902a702940000040f000000c901000041000000800010043f0000008001000039000000040200003902a702940000040f000000000400041a000000ab010000410000000002000414000000ab0320009c0000000001024019000000c001100210000000ac011001c7000500000004001d000000ad054001970000800d020000390000000303000039000000ae04000041000000040600002902a7029d0000040f0000000101200190000001d90000613d0000000501000029000000af011001970000000402000029000000000121019f000000000010041b0000000101000029000000000001041b0000000201000029000000af011001970000000302000029000000000012041b00000000010000190000000002000019000000000300001902a7028a0000040f000000400100043d0000004402100039000000cb03000041000000000032043500000024021000390000000f030000390000000000320435000000c0020000410000000000210435000000040210003900000020030000390000000000320435000000640200003902a702940000040f000000050100002900000000001004350000000401000029000000200010043f000000000100001902a702680000040f000000000201041a000001000300008a000000000232016f000000000021041b000000400100043d00000005020000290000000000210435000000ab020000410000000003000414000000ab0430009c0000000003028019000000ab0410009c00000000010280190000004001100210000000c002300210000000000112019f000000bd011001c70000800d020000390000000103000039000000be0400004102a7029d0000040f00000001012001900000025f0000c13d000001d90000013d000000c2010000410000000000100439000400000003001d000500000004001d000300000005001d02a7027b0000040f0000000203000039000000000013041b0000000301000029000000af011001970000000405000029000000000151019f0000000502000029000000000012041b000000ab010000410000000002000414000000ab0420009c0000000001024019000000c001100210000000ac011001c70000800d02000039000000c70400004102a7029d0000040f0000000101200190000001d90000613d00000000010000190000000002000019000000000300001902a7028a0000040f000000400100043d000000c6020000410000000000210435000000040200003902a702940000040f000000ab020000410000000003000414000000ab0430009c0000000003028019000000ab0410009c00000000010280190000004001100210000000c002300210000000000112019f000000cd011001c7000080100200003902a702a20000040f0000000102200190000002780000613d000000000101043b000000000001042d0000000001000019000000000200001902a702940000040f000000ab010000410000000002000414000000ab0320009c0000000001024019000000c001100210000000ce011001c70000800b0200003902a702a20000040f0000000102200190000002870000613d000000000101043b000000000001042d0000000001000019000000000200001902a702940000040f000000ab04000041000000ab0510009c000000000104801900000040011002100000000001310019000000ab0320009c000000000204801900000060022002100000000001210019000002a80001042e000000ab03000041000000ab0420009c0000000002038019000000ab0410009c000000000103801900000040011002100000006002200210000000000112019f000002a900010430000002a0002104210000000102000039000000000001042d00000000020000190000029f0000013d000002a5002104230000000102000039000000000001042d0000000002000019000002a40000013d000002a700000432000002a80001042e000002a9000104300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffff0200000000000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffffffffffffffffffffffffffffffffffff8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0ffffffffffffffffffffffff0000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ec2b1345000000000000000000000000000000000000000000000000000000003cf52ffb000000000000000000000000000000000000000000000000000000006a42b8f800000000000000000000000000000000000000000000000000000000715018a60000000000000000000000000000000000000000000000000000000084785ecd000000000000000000000000000000000000000000000000000000008da5cb5b00000000000000000000000000000000000000000000000000000000b1f8100d00000000000000000000000000000000000000000000000000000000c5b350df00000000000000000000000000000000000000000000000000000000d1851c9200000000000000000000000000000000000000000000000000000000d232c2200000000000000000000000000000000000000000000000000000000024bdff8c80000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000020000000000000000000000000fa8eab6357bec870e7048c2413cbaa813236bb29ebac113541a76fef429e94dc216578697374000000000000000000000000000000000000000000000000000008c379a000000000000000000000000000000000000000000000000000000000234fe4e200000000000000000000000000000000000000000000000000000000796b89b91644bc98cd93958e4c9038275d622183e25ac5af08cc6b5d955391320000000000000000000000000000000000000000000000000000000000093a809380a17c000000000000000000000000000000000000000000000000000000004e487b710000000000000000000000000000000000000000000000000000000023780cca000000000000000000000000000000000000000000000000000000006ab4d119f23076e8ad491bc65ce85f017fb0591dce08755ba8591059cc51737a945f6e7e000000000000000000000000000000000000000000000000000000008d450dd80000000000000000000000000000000000000000000000000000000070726f6869626974656400000000000000000000000000000000000000000000616c726561647920776174636865720000000000000000000000000000000000bd71030f437353231b6e5bedade573b1e0da5cb6e8bdde37c33c1fea986c29c702000000000000000000000000000000000000400000000000000000000000000200000200000000000000000000000000000004000000000000000000000000";

type WatcherManagerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: WatcherManagerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class WatcherManager__factory extends ContractFactory {
  constructor(...args: WatcherManagerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<WatcherManager> {
    return super.deploy(overrides || {}) as Promise<WatcherManager>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): WatcherManager {
    return super.attach(address) as WatcherManager;
  }
  override connect(signer: Signer): WatcherManager__factory {
    return super.connect(signer) as WatcherManager__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): WatcherManagerInterface {
    return new utils.Interface(_abi) as WatcherManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): WatcherManager {
    return new Contract(address, _abi, signerOrProvider) as WatcherManager;
  }
}