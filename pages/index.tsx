import Layout from "../components/Layout";
import { Button, Flex, Stack } from "@chakra-ui/react";
import AutoCompleteInputComponent from "../components/AutoCompleteInput";
import { useState } from "react";
import DeviceRadioGroup from "../components/DeviceRadioGroup";
import { useRecoilState } from "recoil";
import { deviceState } from "../recoil";

export default function Home() {
  const [show, setShow] = useState(false);
  const [device, setDevice] = useRecoilState(deviceState);

  return (
    <Layout>
      <Stack spacing={5}>
        <Flex>
          <AutoCompleteInputComponent />
          <Button
            w={100}
            alignSelf="end"
            colorScheme={"facebook"}
            onClick={(e) => setShow(true)}
          >
            Submit
          </Button>
        </Flex>
        {show && <DeviceRadioGroup />}
      </Stack>
    </Layout>
  );
}
