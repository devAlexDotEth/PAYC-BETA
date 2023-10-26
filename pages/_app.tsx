import { Container } from 'src/styles';
import Home from './compositions/home';
import type { AppProps } from "next/app";
import { ThirdwebProvider, rainbowWallet, metamaskWallet } from "@thirdweb-dev/react";
import "../styles/globals.css";
// import DesignSystem from './compositions/design-system';

const activeChain = "ethereum";

function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <ThirdwebProvider
      clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
      activeChain={activeChain}
      supportedWallets={[rainbowWallet(), metamaskWallet()]}
    >
      <Component {...pageProps} />
      <Container>
        <Home />
        {/* <DesignSystem /> */}
      </Container>
    </ThirdwebProvider>
  );
}

export default MyApp;
