import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { RecoilRoot } from "recoil";
import { PortfolioProvider } from "../context";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PortfolioProvider value={null}>
      <RecoilRoot>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </RecoilRoot>
    </PortfolioProvider>
  );
}
