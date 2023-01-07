import { FormControl, FormLabel } from "@chakra-ui/react";
import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList
} from "@choc-ui/chakra-autocomplete";
import { assets } from "../config/config";
import { useRecoilState } from "recoil";
import {
  assetState,
  characterState,
  deviceState,
  onCllickState
} from "../recoil";

export default function AutoCompleteInputComponent() {
  const [asset, setAsset] = useRecoilState<string>(assetState);
  const [onClickList, setOnclick] = useRecoilState<boolean[]>(onCllickState);
  const [character, setCharacter] = useRecoilState<string[]>(characterState);
  const [device, setDevice] = useRecoilState<number>(deviceState);

  return (
    <FormControl w="500px" mr={3} alignSelf={"center"}>
      <FormLabel textTransform="capitalize" fontSize={18}>
        asset name
      </FormLabel>
      <AutoComplete openOnFocus>
        <AutoCompleteInput
          h={12}
          variant="filled"
          value={asset}
          onChange={(e) => {
            setAsset(e.target.value);
            setOnclick([]);
            setDevice(0);
            setCharacter([]);
          }}
        />
        <AutoCompleteList>
          {assets.map((asset, cid) => (
            <AutoCompleteItem
              key={`option-${cid}`}
              value={asset}
              textTransform="capitalize"
              onClick={(e) => {
                setAsset(asset);
                setOnclick([]);
                setDevice(0);
                setCharacter([]);
              }}
            >
              {asset}
            </AutoCompleteItem>
          ))}
        </AutoCompleteList>
      </AutoComplete>
    </FormControl>
  );
}
