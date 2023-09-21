import { Center, Icon, Stack, Text } from "@chakra-ui/react";
import { AiOutlineFileProtect } from "react-icons/ai";
export default function Header() {
  return (
    <Center
      height="56px"
      width="full"
      px={4}
      position={"fixed"}
      backgroundColor={"gray.50"}
      boxShadow={"xs"}
      zIndex={999}
    >
      <Stack
        direction={"row"}
        w={{ base: "full", xl: "container.xl" }}
        justifyContent={"space-between"}
        verticalAlign="center"
      >
        <Center>
          <Icon
            as={AiOutlineFileProtect}
            fontSize={"2xl"}
            color="gray.500"
            ml={"13px"}
            pr="1"
          />
          <Text fontSize={"xl"} fontWeight={600} color="gray.500">
            Attack Case Generation Tool
          </Text>
        </Center>
        {/* <Center>
          <Stack direction={{ base: "row", sm: "row" }} align="start">
            <Link href="https://github.com/nimod7890/KINAC">
              <Button
                py={4}
                variant={"solid"}
                colorScheme="gray"
                leftIcon={<AiFillGithub />}
                size={{ base: "xs", md: "sm" }}
                px={4}
              >
                Github
              </Button>
            </Link>
          </Stack>
        </Center> */}
      </Stack>
    </Center>
  );
}
