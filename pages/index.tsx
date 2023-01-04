import Layout from "../components/Layout";
import { Button, Flex, Stack } from "@chakra-ui/react";
import AutoCompleteInputComponent from "../components/AutoCompleteInput";
import { useState } from "react";
import DeviceRadioGroup from "../components/DeviceRadioGroup";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  assetState,
  characterState,
  deviceState,
  onCllickState
} from "../recoil";
import CharacterRadioGroup from "../components/CharacterRadioGroup";

export default function Home() {
  // const [show, setShow] = useState(false);
  const asset = useRecoilValue<string>(assetState);
  const device = useRecoilValue<number>(deviceState);
  const character = useRecoilValue<string[]>(characterState);

  return (
    <Layout>
      <Stack spacing={7}>
        <AutoCompleteInputComponent />
        {asset && (
          <>
            <DeviceRadioGroup />
            {device !== 0 && (
              <>
                <CharacterRadioGroup />
                {character.length == 2 && (
                  <Button
                    w={200}
                    alignSelf="end"
                    colorScheme={"facebook"}
                    onClick={(e) => {}}
                    _active={{
                      transform: "scale(0.98)"
                    }}
                  >
                    Submit
                  </Button>
                )}
              </>
            )}
          </>
        )}
      </Stack>
    </Layout>
  );
}
