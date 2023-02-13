// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token8 is ERC20 {
    constructor() ERC20("Token8", "T8") {}

    function decimals() public pure override returns (uint8) {
        return 8;
    }

    function mint(address account, uint256 amount) public {
        _mint(account, amount);
    }
}
