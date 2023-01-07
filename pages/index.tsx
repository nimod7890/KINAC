import Layout from "../components/Layout";
import {
  Button,
  Divider,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure
} from "@chakra-ui/react";
import AutoCompleteInputComponent from "../components/AutoCompleteInput";
import DeviceRadioGroup from "../components/DeviceRadioGroup";
import CharacterRadioGroup from "../components/CharacterRadioGroup";
import { useRecoilValue } from "recoil";
import { assetState, characterState, deviceState } from "../recoil";
import AttackPathway from "../components/AttackPathway";
import AttackCase from "../components/AttackCase";

export default function Home() {
  const asset = useRecoilValue<string>(assetState);
  const device = useRecoilValue<number>(deviceState);
  const character = useRecoilValue<string[]>(characterState);

  const { isOpen, onOpen, onClose } = useDisclosure();

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
                    onClick={onOpen}
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
        <Modal
          closeOnOverlayClick={false}
          onClose={onClose}
          isOpen={isOpen}
          size="2xl"
          isCentered
        >
          <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(3px)" />
          <ModalContent maxH={"80%"}>
            <ModalHeader fontWeight={"extrabold"} color="facebook.800">
              {asset}
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody overflow={"scroll"}>
              <Text fontSize={14} fontWeight={"hairline"}>
                구분: {device == 1 ? "Hardware" : "Software"}
                <br />
                특성: {character[0]} - {character[1]}
              </Text>
              <Divider mt={3} mb={4} borderColor="#385898" />
              <AttackPathway />
              <AttackCase />
            </ModalBody>
            <ModalFooter>
              <Button colorScheme={"facebook"} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Stack>
    </Layout>
  );
}
