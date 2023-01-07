import { Box, Divider, Text } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { attackcaseSelector } from "../recoil";
import { acSelectorType } from "../types";

export default function AttackCase() {
  const attackcase = useRecoilValue<acSelectorType>(attackcaseSelector);
  return (
    <Text fontWeight={"bold"} color="facebook.800">
      Attack Case: {attackcase[0] == "x" ? "없음" : attackcase[0]}
      {attackcase[0] != "x" &&
        attackcase.slice(1).map((attack, i) => (
          <>
            <Text
              pt={2}
              pl={1}
              fontWeight={"medium"}
              color="black"
              fontSize={14}
              key={`pathway${i}`}
            >
              {`◼ ${attack[0]}`}
            </Text>
            {typeof attack[1] == "object" &&
              attack[1].map((c, j) => (
                <Box
                  key={`Box${i}${j}`}
                  p={2}
                  m={1}
                  ml={5}
                  borderRadius="5px"
                  borderWidth={"1px"}
                  fontWeight={"normal"}
                  color="black"
                  fontSize={13}
                >
                  <Text>Description: {c[0]}</Text>
                  {c[1] != "" && (
                    <>
                      <Divider m={1} />
                      <Text>result: {c[1]}</Text>
                    </>
                  )}
                </Box>
              ))}
          </>
        ))}
    </Text>
  );
}
