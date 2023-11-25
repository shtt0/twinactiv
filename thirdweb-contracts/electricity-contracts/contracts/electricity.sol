// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1175/ERC1175.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ElectricityToken is ERC1175, Ownable {
    // トークンの情報
    string public constant name = "Electricity Token";
    string public constant symbol = "ELEC";
    uint8 public constant decimals = 18;

    // トークンIDごとの価格を保持するマップ
    mapping(uint256 => uint256) public tokenPrices;

    constructor() ERC1175(name, symbol) {
        // コントラクトのオーナーに300個のトークンを初期発行
        mint(msg.sender, 0, 300 * (10 ** uint256(decimals)), "");
    }

    // トークンをBurnする関数
    function burn(uint256[] calldata ids, uint256[] calldata amounts) external onlyOwner {
        _burnBatch(msg.sender, ids, amounts);
    }

    // トークンをMintする関数
    function mint(address to, uint256 id, uint256 amount, bytes memory data) external onlyOwner {
        _mint(to, id, amount, data);
    }

    // トークンを転送する関数
    function transferTokens(address to, uint256 id, uint256 amount, bytes memory data) external {
        require(to != address(0), "Invalid address");
        require(to != address(this), "Cannot transfer to this contract");

        _safeTransferFrom(msg.sender, to, id, amount, data);
    }

    // トークンを売却する関数
    function sellToken(uint256 tokenId, uint256 price) external {
        require(price > 0, "Price must be greater than 0");
        require(msg.sender == ownerOf(tokenId), "You can only sell your own tokens");

        // トークンの価格を設定
        tokenPrices[tokenId] = price;
    }

    // トークンを購入する関数
    function buyToken(uint256 tokenId) external payable {
        uint256 price = tokenPrices[tokenId];
        require(price > 0, "Token is not for sale");
        require(msg.value >= price, "Insufficient funds");

        address seller = ownerOf(tokenId);

        // トークンの所有者を変更
        _transfer(seller, msg.sender, tokenId);

        // 売主に価格を送金
        payable(seller).transfer(price);
    }

    // 他のカスタム関数やロジックを追加することもできます
}
