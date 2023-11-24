import { createRoot } from "react-dom/client";
import {
  ThirdwebProvider,
  ConnectWallet,
  metamaskWallet,
  walletConnect,
  localWallet,
} from "@thirdweb-dev/react";

function metamasklogin() {
  return (
    <ThirdwebProvider
      activeChain="zKatana"
      clientId="Y2c48a39ba889938f1f0e09bc4d7d820b"
      locale={en()}
      supportedWallets={[
        metamaskWallet({ recommended: true }),
        walletConnect(),
        localWallet(),
      ]}
    >
      <ConnectWallet
        theme={"dark"}
        switchToActiveChain={true}
        modalSize={"wide"}
      />
    </ThirdwebProvider>
  );
}

const domNode = document.getElementById("metamask");
const root = createRoot(domNode);
root.render(<metamasklogin />);
