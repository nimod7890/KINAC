import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Footer, Header } from "./components";
import { Box, Stack } from "@mui/material";
import { FlexCenter } from "./components/FlexBox";

export const theme = createTheme({
  palette: {
    background: {
      default: "#FFFFFF",
    },
    primary: {
      main: "#6E7481",
    },
  },
  components: {
    MuiStack: {
      defaultProps: {
        spacing: 3,
      },
    },
  },
});
const width = "1440px";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            width: "100vw",
            minWidth: width,
            minHeight: "100%",
            backgroundColor: "#FFFFFF",
          }}
        >
          <Header />
          <FlexCenter sx={{ minHeight: `calc(100vh - 56px)` }}>
            <Stack
              spacing={4}
              sx={{
                minHeight: "100%",
                width,
                minWidth: width,
                padding: "100px 1rem",
              }}
            >
              <Component {...pageProps} />
            </Stack>
          </FlexCenter>
          <Footer />
        </Box>
      </ThemeProvider>
    </ChakraProvider>
  );
}
