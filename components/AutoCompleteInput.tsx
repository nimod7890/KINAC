import { FormControl, FormLabel } from "@chakra-ui/react";
import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList
} from "@choc-ui/chakra-autocomplete";
import { assets } from "../config";
import { useRecoilState } from "recoil";
import { assetState } from "../recoil";

export default function AutoCompleteInputComponent() {
  const [asset, setAsset] = useRecoilState<string>(assetState);
  return (
    <FormControl w="500px" mr={3}>
      <FormLabel textTransform="capitalize" fontSize={18}>
        asset name
      </FormLabel>
      <AutoComplete openOnFocus>
        <AutoCompleteInput
          h={12}
          variant="filled"
          value={asset}
          onChange={(e) => setAsset(e.target.value)}
        />
        <AutoCompleteList>
          {assets.map((asset, cid) => (
            <AutoCompleteItem
              key={`option-${cid}`}
              value={asset}
              textTransform="capitalize"
              onClick={(e) => setAsset(asset)}
            >
              {asset}
            </AutoCompleteItem>
          ))}
        </AutoCompleteList>
      </AutoComplete>
    </FormControl>
  );
}
