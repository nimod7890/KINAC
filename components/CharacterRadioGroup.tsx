import {
  Button,
  Divider,
  Flex,
  Grid,
  Radio,
  RadioGroup
} from "@chakra-ui/react";
import { useRecoilState, useRecoilValue } from "recoil";
import { characterSelector, characterState, onCllickState } from "../recoil";

export default function CharacterRadioGroup() {
  const characters = useRecoilValue<[string, string[]][]>(characterSelector);
  const [onClickList, setOnclick] = useRecoilState<boolean[]>(onCllickState);
  const [character, setCharacter] = useRecoilState<string[]>(characterState);
  const falseList = Array.from({ length: characters.length }, (v, i) => false);

  return (
    <Grid templateColumns="repeat(3, 250px)" gap={5}>
      {characters.map((c, idx) => (
        <Flex
          direction={"column"}
          wrap="wrap"
          h="fit-content"
          key={`Box-${idx}`}
        >
          <Button
            variant="outline"
            _focus={{
              bg: "#385898",
              color: "#ffffff",
              transform: "scale(0.98)"
            }}
            size="lg"
            colorScheme="facebook"
            value={`${c[0]}`}
            onClick={(v) => {
              if (onClickList[idx] == true) {
                setOnclick(falseList);
              } else {
                let copy = [...falseList];
                copy[idx] = true;
                setOnclick([...copy]);
              }
              setCharacter([c[0]]);
            }}
          >
            {c[0]}
          </Button>
          {onClickList[idx] && (
            <RadioGroup m={1}>
              <Flex direction={"column"}>
                {c[1].map((v, i) => (
                  <>
                    <Radio
                      key={`characterChild-${v}${i}`}
                      size="md"
                      m={1}
                      colorScheme="facebook"
                      value={`${v}`}
                      onChange={(e) => setCharacter([...character, v])}
                    >
                      {v}
                    </Radio>
                    <Divider />
                  </>
                ))}
              </Flex>
            </RadioGroup>
          )}
        </Flex>
      ))}
    </Grid>
  );
}
