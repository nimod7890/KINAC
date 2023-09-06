import { Center, Stack, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Center
      as="footer"
      role="footerinfo"
      px={4}
      py={4}
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
        <Text color="gray.600" fontSize={"xs"} fontWeight={600} textAlign="center">
          Attack Case Generation Tool
        </Text>
      </Stack>
    </Center>
  );
}
