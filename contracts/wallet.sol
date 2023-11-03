// SPDX-License-Identifier: MIT
pragma solidity 0.5.4;
import "./PaymentSplitter.sol";
  contract Wallet is PaymentSplitter {
  constructor(
    address[] memory payees, 
    uint256[] memory shares
  )PaymentSplitter(payees,shares) public {}
}