import { Center, Icon } from "@chakra-ui/react";
import { AiOutlineFileProtect } from "react-icons/ai";
import { FlexSpaceBetween } from "../commons/FlexBox";
import { Typography } from "@mui/material";
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
      <FlexSpaceBetween>
        <Icon as={AiOutlineFileProtect} fontSize={"2xl"} color="gray" ml={"13px"} pr="1" />
        <Typography fontSize={"20px"} fontWeight={600} color="gray">
          Attack Case Generation Tool
        </Typography>
      </FlexSpaceBetween>
    </Center>
  );
}
