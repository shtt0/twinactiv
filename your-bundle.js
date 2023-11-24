import { Zkatana } from "@thirdweb-dev/chains";
import {
  ThirdwebProvider,
  ConnectWallet,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
  localWallet,
  useContract,
  ja,
} from "@thirdweb-dev/react";

export default function App() {
  return (
    <ThirdwebProvider
      activeChain="Zkatana"
      clientId="2c48a39ba889938f1f0e09bc4d7d820b"
      locale={ja()}
      supportedWallets={[
        metamaskWallet({ recommended: true }),
        coinbaseWallet({ recommended: true }),
        walletConnect(),
        localWallet(),
      ]}
    >
      <Component />
      <ConnectWallet theme={"dark"} modalSize={"wide"} />
    </ThirdwebProvider>
  );
}

function Component() {
  const { contract, isLoading } = useContract(
    "0x0000000000000000000000000000000000000000"
  );
}
