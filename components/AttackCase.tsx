import { Box } from "@chakra-ui/react";
import { PwType, acSelectorType } from "../types";
import { useMemo } from "react";
import { attackCase, pathWay } from "../config";
import { Divider, Typography } from "@mui/material";

export default function AttackCase({ pathway }: { pathway: PwType }) {
  const attackcase = useMemo(() => {
    const [isValid, path] = pathway;
    if (isValid == "x") {
      return [isValid];
    }
    var arr: acSelectorType = [isValid];
    for (const key of path) {
      attackCase[key] != undefined && arr.push([pathWay[key], attackCase[key]]);
    }
    return arr;
  }, [pathway]);
  return (
    <Typography fontWeight={"bold"}>
      Attack Case: {attackcase[0] == "x" ? "없음" : attackcase[0]}
      {attackcase[0] != "x" &&
        attackcase.slice(1).map((attack, i) => (
          <>
            <Typography
              pt={2}
              pl={1}
              fontWeight={"medium"}
              color="black"
              fontSize={14}
              key={`pathway${i}`}
            >
              {`◼ ${attack[0]}`}
            </Typography>
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
                  <Typography>Description: {c[0]}</Typography>
                  {c[1] != "" && (
                    <>
                      <Divider />
                      <Typography>result: {c[1]}</Typography>
                    </>
                  )}
                </Box>
              ))}
          </>
        ))}
    </Typography>
  );
}
