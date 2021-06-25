// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../MerkleTreeWithHistory.sol";

contract HasherMock is IHasher {
  function hash(uint256 in_xL, uint256 in_xR) override external pure returns (uint256 xL, uint256 xR) {
    return (in_xL, in_xR);
  }
}