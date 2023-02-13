// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token18 is ERC20 {
    constructor() ERC20("Token18", "T18") {}

    function decimals() public view override returns (uint8) {
        return 18;
    }

    function mint(address account, uint256 amount) public {
        _mint(account, amount);
    }
}
