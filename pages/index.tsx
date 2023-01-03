import Layout from "../components/Layout";
import { Button, Flex, Stack } from "@chakra-ui/react";
import AutoCompleteInputComponent from "../components/AutoCompleteInput";
import { useState } from "react";
import DeviceRadioGroup from "../components/DeviceRadioGroup";
import { useRecoilState } from "recoil";
import { characterState, deviceState } from "../recoil";
import CharacterRadioGroup from "../components/CharacterRadioGroup";

export default function Home() {
  const [show, setShow] = useState(false);
  const [device, setDevice] = useRecoilState<number>(deviceState);
  const [character, setCharacter] = useRecoilState<string[]>(characterState);

  return (
    <Layout>
      <Stack spacing={7}>
        <Flex alignSelf={"center"}>
          <AutoCompleteInputComponent />
          <Button
            alignSelf="end"
            colorScheme={"facebook"}
            onClick={(e) => setShow(true)}
            h={12}
          >
            Submit
          </Button>
        </Flex>
        {show && <DeviceRadioGroup />}
        {device && <CharacterRadioGroup />}
      </Stack>
    </Layout>
  );
}
