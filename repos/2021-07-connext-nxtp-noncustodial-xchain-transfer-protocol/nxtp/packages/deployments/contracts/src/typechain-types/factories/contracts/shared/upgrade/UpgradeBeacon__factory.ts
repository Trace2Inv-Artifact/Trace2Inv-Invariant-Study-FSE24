/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  PayableOverrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  UpgradeBeacon,
  UpgradeBeaconInterface,
} from "../../../../contracts/shared/upgrade/UpgradeBeacon";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_initialImplementation",
        type: "address",
      },
      {
        internalType: "address",
        name: "_controller",
        type: "address",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgrade",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
] as const;

const _bytecode =
  "0x0001000000000002000300000000000200000000000103550000000102200190000000230000c13d000000480100004100000000001004390000000001000412000000040010044300000024000004430000800501000039000000440200003900ee00c60000040f0000003f011001970000000002000411000000000112004b0000005e0000c13d0000000001000367000000000101043b0000003f03100197000000000200041a0000003f02200197000000000232004b000000640000c13d0000004601000041000000800010043f0000002001000039000000840010043f0000000801000039000000a40010043f0000004701000041000000c40010043f0000008001000039000000640200003900ee00dd0000040f00000060021002700000003d01200197000000bf031000390000003e03300197000000400030043f0000001f0220018f00000000030003670000000504100272000000350000613d00000000050000190000000506500210000000000763034f000000000707043b000000a00660003900000000007604350000000105500039000000000645004b0000002d0000413d000000000520004c000000440000613d0000000504400210000000000343034f0000000302200210000000a004400039000000000504043300000000052501cf000000000525022f000000000303043b0000010002200089000000000323022f00000000022301cf000000000252019f00000000002404350000003f0110008c000000c30000a13d000000a00300043d0000003f0130009c000000c30000213d000000c00200043d0000003f0120009c000000c30000213d000000000400041a0000003f01400197000000000131004b0000008d0000c13d000000400100043d00000044021000390000004703000041000000000032043500000024021000390000000803000039000000000032043500000046020000410000000000210435000000040210003900000020030000390000000000320435000000640200003900ee00dd0000040f000000000100041a000000000010043500000020020000390000000001000019000000000300001900ee00d80000040f000300000003001d0000004002000041000000000020043900000004001004430000800201000039000000240200003900ee00c60000040f000000000110004c000000780000c13d0000004601000041000000800010043f0000002001000039000000840010043f0000001801000039000000a40010043f0000004501000041000000c40010043f0000008001000039000000640200003900ee00dd0000040f000000000100041a00000041011001970000000305000029000000000151019f000000000010041b0000003d0100004100000000020004140000003d0320009c0000000001024019000000c00110021000000042011001c70000800d020000390000000203000039000000430400004100ee00e40000040f0000000101200190000000c30000613d00000000010000190000000002000019000000000300001900ee00d80000040f000100000004001d000300000002001d00000040010000410000000000100439000000040030044300008002010000390000002402000039000200000003001d00ee00c60000040f000000000110004c000000a60000c13d000000400100043d00000044021000390000004503000041000000000032043500000024021000390000001803000039000000000032043500000046020000410000000000210435000000040210003900000020030000390000000000320435000000640200003900ee00dd0000040f000000010100002900000041011001970000000205000029000000000151019f000000000010041b0000003d0100004100000000020004140000003d0320009c0000000001024019000000c00110021000000042011001c70000800d020000390000000203000039000000430400004100ee00e40000040f00000001012001900000000301000029000000c30000613d000000800010043f00000140000004430000016000100443000000200100003900000100001004430000000101000039000001200010044300000100010000390000008002000039000000440300004100ee00d80000040f0000000001000019000000000200001900ee00dd0000040f00000000030100190000003d0100004100000000040004140000003d0540009c0000000001044019000000c001100210000000600220021000000000011200190000004901100041000000000203001900ee00e90000040f0000000102200190000000d50000613d000000000101043b000000000001042d0000000001000019000000000200001900ee00dd0000040f0000004001100210000000600220021000000000011200190000000001310019000000ef0001042e0000003d030000410000003d0410009c000000000103801900000040011002100000006002200210000000000121019f000000f000010430000000e7002104210000000102000039000000000001042d0000000002000019000000e60000013d000000ec002104230000000102000039000000000001042d0000000002000019000000eb0000013d000000ee00000432000000ef0001042e000000f00001043000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffff00000000000000000000000000000000000000000000000000000001ffffffe0000000000000000000000000ffffffffffffffffffffffffffffffffffffffff1806aa1896bbf26568e884a7374b41e002500962caba6a15023a8d90e8508b83ffffffffffffffffffffffff00000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000f78721226efe9a1bb678189a16d1554928b9f2192e2cb93eeda83b79fa40007d0000000200000000000000000000000000000000000000000000000000000000696d706c656d656e746174696f6e2021636f6e7472616374000000000000000008c379a0000000000000000000000000000000000000000000000000000000002175706772616465000000000000000000000000000000000000000000000000310ab089e4439a4c15d089f94afb7896ff553aecb10793d0ab882de59d99a32e02000002000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000";

type UpgradeBeaconConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UpgradeBeaconConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UpgradeBeacon__factory extends ContractFactory {
  constructor(...args: UpgradeBeaconConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _initialImplementation: PromiseOrValue<string>,
    _controller: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<UpgradeBeacon> {
    return super.deploy(
      _initialImplementation,
      _controller,
      overrides || {}
    ) as Promise<UpgradeBeacon>;
  }
  override getDeployTransaction(
    _initialImplementation: PromiseOrValue<string>,
    _controller: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _initialImplementation,
      _controller,
      overrides || {}
    );
  }
  override attach(address: string): UpgradeBeacon {
    return super.attach(address) as UpgradeBeacon;
  }
  override connect(signer: Signer): UpgradeBeacon__factory {
    return super.connect(signer) as UpgradeBeacon__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UpgradeBeaconInterface {
    return new utils.Interface(_abi) as UpgradeBeaconInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UpgradeBeacon {
    return new Contract(address, _abi, signerOrProvider) as UpgradeBeacon;
  }
}