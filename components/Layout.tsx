import { Flex, Stack } from "@chakra-ui/react";
import { LayoutDefaultProps } from "../types";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }: LayoutDefaultProps) {
  return (
    <>
      <Header />
      <Flex
        pt={5}
        direction="column"
        justify="center"
        align="center"
        minH="89vh"
      >
        {children}
      </Flex>
      <Footer />
    </>
  );
}
