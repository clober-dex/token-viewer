// SPDX-License-Identifier: MIT
// Clober-dex Contracts

pragma solidity ^0.8.0;

/**
 * @title Token Viewer Interface
 * @dev ITokenViewer is an interface contract that provides the functionality to retrieve information
 * about the balance and allowances of various token contracts.
 *
 * @author Clober
 */
interface ITokenViewer {
    struct TokenDto {
        address addr;
        string name;
        string symbol;
        uint256 decimals;
        uint256 balance;
        uint256 allowance;
    }

    function getTokens(
        address[] calldata tokens,
        address user,
        address spender
    ) external view returns (TokenDto[] memory);
}
