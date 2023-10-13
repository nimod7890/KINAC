import { useState } from "react";
import {
  Autocomplete,
  TextField,
  Button,
  Stack,
  Typography,
} from "@mui/material";
import { AssetType, PwType } from "../types";
import CharacterRadioGroup from "./CharacterRadioGroup";
import DeviceRadioGroup from "./DeviceRadioGroup";
import { ResultModal } from "./ResultModal";
import { AddButton } from "./AddButton";

const initialAssetObject = {
  asset: "",
  device: 1,
  pathway: ["", []] as PwType,
  characters: [],
  selectedList: [],
};
export const HomePage = () => {
  const [assetObject, setAssetObject] = useState<AssetType>(initialAssetObject);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Stack direction="row" gap={3} sx={{ alignItems: "center" }}>
        <Typography sx={{ fontSize: "20px", fontWeight: 700 }}>
          Asset Name:
        </Typography>
        <Autocomplete
          sx={{ width: "500px" }}
          value={assetObject.asset}
          options={assets}
          renderInput={(params) => (
            <TextField
              variant="outlined"
              ref={params.InputProps.ref}
              inputProps={{ ...params.inputProps }}
              fullWidth
            />
          )}
          onChange={(_e, newAsset) =>
            setAssetObject({
              asset: newAsset as string,
              device: 1,
              characters: [],
              selectedList: [],
              pathway: ["", []],
            })
          }
        />
        <AddButton />
      </Stack>
      {assetObject.asset && (
        <>
          <DeviceRadioGroup
            device={assetObject.device}
            setDevice={(device) =>
              setAssetObject({
                asset: assetObject.asset,
                device,
                pathway: ["", []],
                characters: [],
                selectedList: [],
              })
            }
          />
          {(() => {
            if (assetObject.device) {
              return (
                <>
                  <CharacterRadioGroup
                    assetObject={assetObject}
                    setAssetObject={setAssetObject}
                  />
                  {assetObject.characters.length == 2 && (
                    <Button
                      sx={{
                        width: "200px",
                        height: "36px",
                        alignSelf: "end",
                      }}
                      onClick={() => setIsOpen(true)}
                    >
                      Submit
                    </Button>
                  )}
                </>
              );
            }
            return null;
          })()}
        </>
      )}
      {isOpen && (
        <ResultModal
          assetObject={assetObject}
          onClose={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

const assets: string[] = [
  "Limit/Alarm Switch Module",
  "Pressure Transmitters",
  "PID Controller",
  "Digital Temperature Indicator",
  "A3",
  "B1",
  "필수계통 RTU",
  "PLC",
  "RT",
  "Multi-function Relay With serial DNP",
];
