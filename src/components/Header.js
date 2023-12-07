import React from "react";
import { ConnectWallet } from "@thirdweb-dev/react";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="/main_logo.png" alt="TWINACTIV" />
      </div>

      <nav className="nav">
        <ul>
          <li>
            <a href="#my-garage">My Garage</a>
          </li>
          <li>
            <a href="#nft-items">NFT Items</a>
          </li>
          <li>
            <a href="#marketplace">Marketplace</a>
          </li>
          <li>
            <ConnectWalletButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

const ConnectWalletButton = () => {
  return <ConnectWallet />;
};

export default Header;
