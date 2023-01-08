import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { RecoilRoot } from "recoil";
import { PortfolioProvider } from "../context";
const prefix =
  process.env.NODE_ENV === "production"
    ? "https://nimod7890.github.io/KINAC"
    : "";
export default function App({ Component, pageProps }) {
  return (
    <PortfolioProvider value={{ prefix }}>
      <RecoilRoot>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </RecoilRoot>
    </PortfolioProvider>
  );
}
