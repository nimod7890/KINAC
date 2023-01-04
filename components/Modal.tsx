import { Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import { characterState, deviceState, onCllickState } from "../recoil";

export default function Modal() {
  const [device, setDevice] = useRecoilState<number>(deviceState);
  const [onClickList, setOnclick] = useRecoilState<boolean[]>(onCllickState);
  const [character, setCharacter] = useRecoilState<string[]>(characterState);

  return (
    <RadioGroup
      alignSelf={"center"}
      textTransform={"capitalize"}
      value={device.toString()}
      onChange={(value) => {
        setDevice(Number(value));
        setOnclick([]);
        setCharacter([]);
      }}
    >
      <Stack spacing={50} direction="row">
        <Radio size="lg" colorScheme="facebook" value="1">
          hardware
        </Radio>
        <Radio size="lg" colorScheme="facebook" value="2">
          software
        </Radio>
      </Stack>
    </RadioGroup>
  );
}
