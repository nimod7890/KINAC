import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    background: {
      default: "#FFFFFF",
    },
    primary: {
      main: "#6E7481",
    },
    // secondary: {
    //   main: neutral[10],
    // },
    // error: {
    //   main: error[60],
    // },
    // warning: {
    //   main: alert[60],
    // },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </ChakraProvider>
  );
}
