// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract JIToken is ERC20, Ownable {
    constructor(string memory name, string memory symbol) ERC20(name, symbol) {}

    // Mint新しいトークン
    function mint(address to, uint256 amount) external onlyOwner {
        _mint(to, amount);
    }

    // 所持者からトークンをBurn
    function burn(uint256 amount) external {
        _burn(msg.sender, amount);
    }

    // コントラクトの発行者からトークンを所持者にTransfer
    function transferFromOwner(address to, uint256 amount) external onlyOwner {
        _transfer(owner(), to, amount);
    }

    // トークンの所有者がトークンをコントラクトの発行者に対してだけ転送できるようにする
    function transfer(address recipient, uint256 amount) public override returns (bool) {
        require(recipient == owner(), "You can only transfer tokens to the contract owner");
        return super.transfer(recipient, amount);
    }
}
