import { Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import { deviceState } from "../recoil";

export default function DeviceRadioGroup() {
  const [device, setDevice] = useRecoilState(deviceState);

  return (
    <RadioGroup
      alignSelf={"center"}
      textTransform={"capitalize"}
      onChange={(value) => setDevice(Number(value))}
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
