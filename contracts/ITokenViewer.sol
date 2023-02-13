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

    /**
     * getTokens is a function that retrieves information about a set of token contracts
     * given their addresses and returns the information in the form of an array of TokenDto objects.
     *
     * @param tokens an array of addresses of token contracts
     * @param user the address of the user whose token information is to be retrieved
     * @param spender the address of the spender whose token information is to be retrieved
     *
     * @return an array of TokenDto objects containing information about the token contracts
     */
    function getTokens(
        address[] calldata tokens,
        address user,
        address spender
    ) external view returns (TokenDto[] memory);
}
