// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "../../kodo-contracts/contracts/kodo_Contract.sol";

contract TWINACTIV is ERC721Enumerable, ERC1155, Ownable {
    // KODOの属性情報
    enum KODOType { Craftsman, Racer, Challenger }

    // KODOTypeに対応するTWINACTIVの属性情報
    mapping(KODOType => string) public _twinActivAttributes;

    // TWINACTIVのベースURI
    string private _baseTokenURI;

    // Electricityトークンのアドレス
    address public _ElectricityAddress;
    constructor() {
    _electricityAddress = 0x906aCf91D1d7779cDcCFAF0490e15523962efB7B;
    }

    // Claim可能なJIの累積獲得量
    uint256 private _accumulatedJI;

    // 各ユーザーの最後のClaim時刻を記録するマップ
    mapping(address => uint256) private _lastClaimTimestamp;

    // Mapping to store token attributes
    mapping(uint256 => string) private tokenAttributes;

    constructor(string memory name, string memory symbol, string memory baseTokenURI, address ElectricityAddress) ERC721(name, symbol) ERC1155("") {
        _baseTokenURI = baseTokenURI;
        _ElectricityAddress = ElectricityAddress;

        // KODOTypeに応じたTWINACTIVの属性情報を設定
        _twinActivAttributes[KODOType.Craftsman] = "Future RS";
        _twinActivAttributes[KODOType.Racer] = "Future RX";
        _twinActivAttributes[KODOType.Challenger] = "Future SP";
    }

    function setBaseURI(string memory baseTokenURI) external onlyOwner {
        _baseTokenURI = baseTokenURI;
    }

    function _baseURI() internal view override returns (string memory) {
        return _baseTokenURI;
    }
}

contract MyContract {
    // KODOコントラクトのインスタンスを保持する変数
    KODO public kodoContract;

    // コンストラクタでKODOコントラクトのアドレスを受け取る
    constructor(KODO _kodoContract) {
        kodoContract = _kodoContract;
    }

    function mintTWINACTIV(address to, uint256 kodoTokenId) external {
        // KODOトークンが存在し、呼び出し元がその所有者であることを確認
        require(kodoContract.ownerOf(kodoTokenId) == msg.sender, "Not the owner of the KODO token");
        require(kodoContract._exists(kodoTokenId), "KODO token does not exist");

        // KODOトークンを燃やす
        kodoContract._burn(kodoTokenId);

        // TWINACTIV NFTをMint
        uint256 newTokenId = totalSupply() + 1;
        _mint(to, newTokenId);
    }
    // ...
}
    // ElectricityをBurnしてJIをClaimする関数
    function burnElectricityAndClaimJI(uint256 amount) external {
        require(amount > 0, "Amount must be greater than 0");

        // ユーザーが選択したElectricityの数が保有数以上であることを確認
        uint256 userElectricityBalance = IERC1155(_ElectricityAddress).balanceOf(msg.sender, 0);
        require(amount <= userElectricityBalance, "Insufficient Electricity balance");

        // 指定されたElectricityをBurn
        IERC1155(_ElectricityAddress).burn(msg.sender, 0, amount);

        // 指定したElectricityに対応するJIの数を計算
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
        IERC20(0x45B2242E54Dae439B080D459C1f1E9290E061E34).transfer(msg.sender, jiAmount);

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

    // トークンのURIを設定（各トークンの属性情報に応じて異なるURIを設定）
    function _setURI(uint256 tokenId, string memory uri) internal {
        // Set the URI for the specified token ID
        // Implementation details here
    }

    // イベントを発行
    event ClaimJI(address indexed user, uint256 jiAmount);
}