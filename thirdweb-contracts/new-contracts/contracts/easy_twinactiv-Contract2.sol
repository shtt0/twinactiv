// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC1155/IERC1155.sol"; // ERC1155をimport

contract TWINACTIV is ERC721, Ownable {

    // TWINACTIV属性情報
    enum TWINACTIVType { FutureRS, FutureRX, FutureSP }

    // コントラクトのベースURI
    string private _baseTokenURI;

    // JITokenのアドレス
    address private _jiTokenAddress;

    // Claim可能なJIの累積獲得量
    uint256 private _accumulatedJI;

    // 各ユーザーの最後のClaim時刻を記録するマップ
    mapping(address => uint256) private _lastClaimTimestamp;

    // イベントを発行
    event ClaimJI(address indexed user, uint256 jiAmount);

    // コンストラクター
    constructor(string memory name, string memory symbol, string memory baseTokenURI, address jiTokenAddress, address electricityAddress) ERC721(name, symbol) {
        _baseTokenURI = baseTokenURI;
        _jiTokenAddress = jiTokenAddress;
        _electricityAddress = electricityAddress; // Elecricityトークンのアドレスをセット
        _totalSupply = 0; // 初期総供給量は0
    }

    function setBaseURI(string memory baseTokenURI) external onlyOwner {
        _baseTokenURI = baseTokenURI;
    }

    function _baseURI() internal view override returns (string memory) {
        return _baseTokenURI;
    }

    // ERC721トークンの総供給量を追跡するカウンター
uint256 private _totalSupply;

constructor(string memory name, string memory symbol, string memory baseTokenURI, address jiTokenAddress) ERC721(name, symbol) {
    _baseTokenURI = baseTokenURI;
    _jiTokenAddress = jiTokenAddress;
    _totalSupply = 0; // 初期総供給量は0
}

// TWINACTIVをMintするメソッド
function mintTWINACTIV(address to) external onlyOwner {
    uint256 newTokenId = _totalSupply + 1;
    _mint(to, newTokenId);
    _totalSupply += 1; // トークンが発行されたら総供給量をインクリメント
}

    // ElectricトークンをTransferしてJIをClaimする関数（ERC20トークン用の関数）
    function transferElectricityAndClaimJI(uint256 amount) external {
        require(amount > 0, "Amount must be greater than 0");

        // ユーザーが選択したElectricityの数が保有数以上であることを確認
        uint256 userElectricityBalance = IERC20(_jiTokenAddress).balanceOf(msg.sender);
        require(amount <= userElectricityBalance, "Insufficient JIToken balance");

        // 指定されたElectricityに対応するJIの数を計算
        uint256 jiAmount = amount * 1000; // 1 Electricityにつき1000 JI

        // ユーザーの最後のClaim時刻から経過した秒数を計算
        uint256 currentTime = block.timestamp;
        uint256 lastClaimTime = _lastClaimTimestamp[msg.sender];
        uint256 timeElapsed = currentTime - lastClaimTime;

        // 1秒ごとに0.17 JIを獲得
        uint256 jiEarned = (timeElapsed * 17) / 100; // 0.17 JI * 100 (for precision)

        // Claim可能なJIの累積獲得量を更新
        _accumulatedJI += jiEarned;

        // ユーザーの最後のClaim時刻を更新
        _lastClaimTimestamp[msg.sender] = currentTime;

        // ユーザーにJIを送信
        IERC20(_jiTokenAddress).transferFrom(msg.sender, address(this), jiAmount);

        // ClaimJIイベントを発行
        emit ClaimJI(msg.sender, jiAmount);
    }

    // クレーム可能なJIの量を取得
    function getClaimableJI(address user) external view returns (uint256) {
        // ユーザーの最後のClaim時刻から経過した秒数を計算
        uint256 currentTime = block.timestamp;
        uint256 lastClaimTime = _lastClaimTimestamp[user];
        uint256 timeElapsed = currentTime - lastClaimTime;

        // 1秒ごとに0.17 JIを獲得
        uint256 jiEarned = (timeElapsed * 17) / 100; // 0.17 JI * 100 (for precision)

        // Claim可能なJIの累積獲得量に経過時間で獲得したJIを加算
        uint256 claimableJI = _accumulatedJI + jiEarned;

        return claimableJI;
    }

    // ERC721トークンを転送する関数
    function transferFrom(address from, address to, uint256 tokenId) public override {
        require(_isApprovedOrOwner(_msgSender(), tokenId), "ERC721: transfer caller is not owner nor approved");
        require(ownerOf(tokenId) == from, "ERC721: transfer of token that is not own");
        require(to != address(0), "ERC721: transfer to the zero address");

        // トークンの転送を実行
        _transfer(from, to, tokenId);
    }
}
