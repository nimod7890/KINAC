import { Center, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";

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
    >
      <Stack
        direction={"row"}
        w={{ base: "full", xl: "container.xl" }}
        justifyContent={"space-between"}
      >
        <Stack
          direction={"column"}
          justify="left"
          alignContent="left"
          spacing={1}
        >
          <Text color="gray.600" fontSize={"xs"} fontWeight={600}>
            KINAC PROJECT
          </Text>
          <Link href="https://skku.edu">
            <Text color="gray.500" fontSize={"xs"}>
              Sungkyunkwan University
            </Text>
          </Link>
          <Link href="https://swlab.skku.edu/sw/index.do">
            <Text color="gray.500" fontSize={"xs"}>
              SWLAB
            </Text>
          </Link>
        </Stack>
        <Stack direction={"column"} align="end" spacing={1}>
          <Text color="gray.500" fontSize={"sm"} fontWeight={600}>
            Developed by
          </Text>
          <Stack direction={"row"}>
            <Link href="https://github.com/nimod7890">
              <Text color="gray.500" fontSize={"xs"}>
                Bomin Kim
              </Text>
            </Link>
          </Stack>
        </Stack>
      </Stack>
    </Center>
  );
}
