import { useState } from "react";
import { Autocomplete, TextField, Stack, Button } from "@mui/material";
import { AssetType, PwType } from "../types";
import CharacterRadioGroup from "./CharacterRadioGroup";
import DeviceRadioGroup from "./DeviceRadioGroup";
import { ResultModal } from "./ResultModal";
import Header from "./Header";
import Footer from "./Footer";
import { Box } from "@chakra-ui/react";

const initialAssetObject = {
  asset: "",
  device: 0,
  pathway: ["", []] as PwType,
  characters: [],
  selectedList: [],
};
export const Layout = () => {
  const [assetObject, setAssetObject] = useState<AssetType>(initialAssetObject);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Box sx={{ width: "100vw", height: "100vh" }}>
      <Header />
      <Stack
        spacing={3}
        sx={{
          height: "calc(100% - 56px)",
          paddingTop: "50px",
          backgroundColor: "#FFFFFF",
        }}
      >
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
              device: 0,
              characters: [],
              selectedList: [],
              pathway: ["", []],
            })
          }
        />
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
      </Stack>
      <Footer />
      {isOpen && (
        <ResultModal
          assetObject={assetObject}
          onClose={() => setIsOpen(false)}
        />
      )}
    </Box>
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
