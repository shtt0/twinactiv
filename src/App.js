import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Zkatana } from "@thirdweb-dev/chains";
import Header from "./components/Header.js";
import "./styles/Home.css";
import TokenBlComponent from "./tokenBlComponent"; // コンポーネントをインポート
import GetStakeInfoComponent from "./GetStakeInfoComponent.js"; // GetStakeComponent をインポート
import ClaimComponent from "./claimComponent.js"; // ClaimComponent をインポート
import MissionGallery from "./MissionGallery.js"; // MissionGallery をインポート
import IframeComponent from "./IframeComponent"; // IframeComponent のインポート
import ItemsGallery from "./ItemsGallery.js"; // ItemsGallery をインポート

export default function App() {
  // コントラクト関連のフックを使った関数

  return (
    <ThirdwebProvider
      activeChain={Zkatana} // Zkatana をアクティブチェーンに設定
      clientId="0865e6b373adc06a2a0579aa55958b04"
    >
      // The fragment should start here
      <Header /> {/* Headerコンポーネントをここで使用 */}
      <main className="main">
        <div className="container">
          <h1 className="title">
            Where to today:{" "}
            <span className="gradient-text-3">
              <a
                href="https://thirdweb.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Real World
              </a>
            </span>{" "}
            or{" "}
            <span className="gradient-text-1">
              <a
                href="https://thirdweb.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Metaverse
              </a>
            </span>{" "}
            ?
          </h1>
          {/* ここからヘッダー内に含めたくないコンテンツ */}

          <div className="brand-image-container">
            <img
              src="/all_logo.png"
              alt="Brand Image"
              className="brand-image"
            />
          </div>
          <div id="my-garage"></div>
          <h1 className="title">My Garage</h1>

          <div className="grid">
            <a className="card" target="_blank">
              <img src="/images/garage.png" alt="Your TWINACTIV Image" />
              <div className="card-text">
                <h2 className="gradient-text-1">Your TWINACTIV is ready...</h2>
                <h3>ACTIV Records: coming soon</h3>
                <h3>Total ACTIV Time: 1y 2mo 10d 02:00:36 </h3>
                <h3>Total Rewards: 510,0241 </h3>
                <h3>Mission Complete: 247 </h3>
              </div>
            </a>
            <a
              className="card"
              target="_blank"
              style={{ display: "flex", alignItems: "center" }}
            >
              {/* 画像を追加 */}
              <img
                src="/images/jitoken.png" // 画像のパスを設定
                style={{
                  width: "7em", // 画像の幅（1文字分）
                  height: "7em", // 画像の高さ（1文字分）
                  marginLeft: "2em", // マージンを設定してテキストとの間隔を調整
                  margin: "0.5em", // マージンを設定してテキストとの間隔を調整
                  verticalAlign: "middle", // テキストとの垂直方向の位置を調整
                }}
              />
              {/* テキストと変数の値を追加 */}
              <div className="card-text">
                <h2 className="gradient-text-1">
                  Your Balance of JIMBA-ITTAI Token
                </h2>
                <TokenBlComponent /> {/* TokenBlComponent を配置 */}
              </div>
            </a>
            <a
              className="card"
              target="_blank"
              style={{ display: "flex", alignItems: "center" }}
            >
              {/* 画像を追加 */}
              <img
                src="/images/electricity.png" // 画像のパスを設定
                style={{
                  width: "7em", // 画像の幅（1文字分）
                  height: "7em", // 画像の高さ（1文字分）
                  marginLeft: "2em", // マージンを設定してテキストとの間隔を調整
                  margin: "0.5em", // マージンを設定してテキストとの間隔を調整
                  verticalAlign: "middle", // テキストとの垂直方向の位置を調整
                }}
              />
              {/* テキストと変数の値を追加 */}
              <div className="card-text">
                <h2 className="gradient-text-2">Spend Electricity</h2>
                <p style={{ fontSize: "1em" }}>coming soon... </p>
                {/* <p>{jiTokenBalance} JI TOKEN</p>{" "} */}
                {/* jiTokenBalance は変数の値 */}
              </div>
            </a>
            <a
              className="card"
              target="_blank"
              style={{ display: "flex", alignItems: "center" }}
            >
              <img
                src="/images/yield.png"
                style={{
                  width: "7em",
                  height: "7em",
                  marginLeft: "2em",
                  margin: "0.5em",
                  verticalAlign: "middle",
                }}
              />

              {/* テキストと claimRewards ボタン */}
              <div className="card-text">
                <h2 className="gradient-text-3">
                  Sustainable Kinetic Yield (Claimable Rewards)
                </h2>
                <GetStakeInfoComponent /> {/* ここにGetStakeComponentを配置 */}
                <ClaimComponent /> {/* ClaimComponent をここに配置 */}
              </div>
            </a>

            <div className="card-text">
              <MissionGallery /> {/* missionGallery コンポーネントの挿入 */}
            </div>

            <div className="custom-border-box2">
              <h1>Check All Mission & Details (coming soon...)</h1>
            </div>

            <div id="nft-items"></div>
            <div className="card-text">
              <ItemsGallery /> {/* ItemsGallery コンポーネントの挿入 */}
            </div>

            <div
              className="custom-border-box"
              onClick={() =>
                window.open(
                  "https://twinactiv-marketplace.vercel.app/",
                  "_blank"
                )
              }
            >
              <div id="marketplace"></div>
              <h1>Go to Marketplace</h1>
            </div>

            <div className="card-text">
              <h1 className="gradient-text-3">Royal Tickets Sale [Official]</h1>
              <IframeComponent
                src="https://embed.ipfscdn.io/ipfs/bafybeigdie2yyiazou7grjowoevmuip6akk33nqb55vrpezqdwfssrxyfy/erc1155.html?contract=0x035376F220AE366dd72dcF432146BeF63bD0B02A&chain=%7B%22name%22%3A%22zKatana%22%2C%22chain%22%3A%22ETH%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Fzkatana.rpc.thirdweb.com%2F%24%7BTHIRDWEB_API_KEY%7D%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22Sepolia+Ether%22%2C%22symbol%22%3A%22ETH%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22azktn%22%2C%22chainId%22%3A1261120%2C%22testnet%22%3Atrue%2C%22slug%22%3A%22zkatana%22%2C%22icon%22%3A%7B%22url%22%3A%22ipfs%3A%2F%2FQmRySLe3su59dE5x5JPm2b1GeZfz6DR9qUzcbp3rt4SD3A%22%2C%22width%22%3A300%2C%22height%22%3A300%2C%22format%22%3A%22png%22%7D%7D&clientId=daa9877b8ef14975ccb3d5354a211ea6&tokenId=1&theme=dark&primaryColor=cyan"
                className="iframe-margin"
              />
              <IframeComponent
                src="https://embed.ipfscdn.io/ipfs/bafybeigdie2yyiazou7grjowoevmuip6akk33nqb55vrpezqdwfssrxyfy/erc1155.html?contract=0x035376F220AE366dd72dcF432146BeF63bD0B02A&chain=%7B%22name%22%3A%22zKatana%22%2C%22chain%22%3A%22ETH%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Fzkatana.rpc.thirdweb.com%2F%24%7BTHIRDWEB_API_KEY%7D%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22Sepolia+Ether%22%2C%22symbol%22%3A%22ETH%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22azktn%22%2C%22chainId%22%3A1261120%2C%22testnet%22%3Atrue%2C%22slug%22%3A%22zkatana%22%2C%22icon%22%3A%7B%22url%22%3A%22ipfs%3A%2F%2FQmRySLe3su59dE5x5JPm2b1GeZfz6DR9qUzcbp3rt4SD3A%22%2C%22width%22%3A300%2C%22height%22%3A300%2C%22format%22%3A%22png%22%7D%7D&clientId=daa9877b8ef14975ccb3d5354a211ea6&tokenId=2&theme=dark&primaryColor=cyan"
                className="iframe-margin"
              />
            </div>
          </div>
        </div>
      </main>
    </ThirdwebProvider>
  );
}
