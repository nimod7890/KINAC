import { Center, Stack } from "@chakra-ui/react";
import { Typography } from "@mui/material";

export default function Footer() {
  return (
    <Center
      as="footer"
      role="footerinfo"
      px={4}
      py={4}
      height="56px"
      position="relative"
      backgroundColor={"gray.50"}
      boxShadow="xs"
      flex="1"
    >
      <Stack
        direction={"column"}
        w={{ base: "full", xl: "container.xl" }}
        alignContent="center"
      >
        <Typography
          sx={{ color: "gray" }}
          fontSize={"xs"}
          fontWeight={600}
          textAlign="center"
        >
          Attack Case Generation Tool
        </Typography>
      </Stack>
    </Center>
  );
}
