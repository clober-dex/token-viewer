// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token6 is ERC20 {
    constructor() ERC20("Token6", "T6") {}

    function decimals() public view override returns (uint8) {
        return 6;
    }

    function mint(address account, uint256 amount) public {
        _mint(account, amount);
    }
}
