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
          size="md"
          isCentered
        >
          <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(3px)" />
          <ModalContent>
            <ModalHeader fontWeight={"bold"} color="facebook.800">
              {asset}
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text fontSize={14}>
                구분: {device == 1 ? "Hardware" : "Software"}
                <br />
                특성: {character[0]} - {character[1]}
              </Text>
              <Divider mt={2} mb={5} borderColor="#385898" />
              <Text fontWeight={"bold"} color="facebook.800">
                Attack Pathway:
              </Text>
              <Text fontWeight={"bold"} color="facebook.800">
                Attack Case:
              </Text>
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
