import { Text } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { pathwaySelector } from "../recoil";

export default function AttackPathway() {
  const pathway = useRecoilValue<string[]>(pathwaySelector);
  return (
    <Text fontWeight={"bold"} color="facebook.800" pb={5}>
      Attack Pathway
      {pathway.map((p, i) => (
        <Text
          fontSize={14}
          fontWeight={"normal"}
          color="black"
          key={`pathway${i}`}
        >
          - {p}
        </Text>
      ))}
    </Text>
  );
}
