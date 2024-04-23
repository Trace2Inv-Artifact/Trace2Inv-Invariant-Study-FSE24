// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

/******************************************************************************\
* Author: Nick Mudge <nick@perfectabstractions.com> (https://twitter.com/mudgen)
* EIP-2535 Diamonds: https://eips.ethereum.org/EIPS/eip-2535
*
* Implementation of a diamond.
/******************************************************************************/

import {LibDiamond} from "../libraries/LibDiamond.sol";
import {IDiamondCut} from "../interfaces/IDiamondCut.sol";

contract ConnextDiamond {
  error ConnextDiamond__fallback_facetNotExit();

  struct Initialization {
    address initContract;
    bytes initData;
  }

  /// @notice This construct a diamond contract
  /// @param _contractOwner the owner of the contract. With default DiamondCutFacet, this is the sole address allowed to make further cuts.
  /// @param _diamondCut the list of facet to add
  /// @param _initializations the list of initialization pair to execute. This allow to setup a contract with multiple level of independent initialization.
  constructor(
    address _contractOwner,
    IDiamondCut.FacetCut[] memory _diamondCut,
    Initialization[] memory _initializations
  ) payable {
    if (_contractOwner != address(0)) {
      LibDiamond.setContractOwner(_contractOwner);
    }

    LibDiamond.diamondCut(_diamondCut, address(0), "");

    uint256 len = _initializations.length;
    for (uint256 i = 0; i < len; ) {
      LibDiamond.initializeDiamondCut(_initializations[i].initContract, _initializations[i].initData);

      unchecked {
        ++i;
      }
    }
  }

  // Find facet for function that is called and execute the
  // function if a facet is found and return any value.
  fallback() external payable {
    LibDiamond.DiamondStorage storage ds;
    bytes32 position = LibDiamond.DIAMOND_STORAGE_POSITION;
    // get diamond storage
    assembly {
      ds.slot := position
    }
    // get facet from function selector
    address facet = ds.selectorToFacetAndPosition[msg.sig].facetAddress;
    if (facet == address(0)) {
      revert ConnextDiamond__fallback_facetNotExit();
    }
    // Execute external function from facet using delegatecall and return any value.
    assembly {
      // copy function selector and any arguments
      calldatacopy(0, 0, calldatasize())
      // execute function call using the facet
      let result := delegatecall(gas(), facet, 0, calldatasize(), 0, 0)
      // get any return value
      returndatacopy(0, 0, returndatasize())
      // return any return value or error back to the caller
      switch result
      case 0 {
        revert(0, returndatasize())
      }
      default {
        return(0, returndatasize())
      }
    }
  }

  receive() external payable {}
}