// SPDX-License-Identifier: MIT
// Clober-dex Contracts

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

import "./ITokenViewer.sol";

contract TokenViewer is ITokenViewer {
    function getTokens(
        address[] calldata tokens,
        address user,
        address spender
    ) external view returns (TokenDto[] memory results) {
        results = new TokenDto[](tokens.length + 1);
        for (uint256 i = 0; i < tokens.length; ++i) {
            ERC20 token = ERC20(tokens[i]);
            results[i] = TokenDto({
                addr: tokens[i],
                name: token.name(),
                symbol: token.symbol(),
                decimals: token.decimals(),
                balance: user != address(0) ? token.balanceOf(user) : 0,
                allowance: spender != address(0) ? token.allowance(user, spender) : 0
            });
        }
        results[tokens.length] = TokenDto({
            addr: address(0),
            name: "Ethereum",
            symbol: "ETH",
            decimals: 18,
            balance: user != address(0) ? user.balance : 0,
            allowance: 0
        });
    }
}
