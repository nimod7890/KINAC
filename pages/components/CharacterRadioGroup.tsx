import { AssetType } from "../types";
import { useMemo } from "react";
import { FlexBox } from "./FlexBox";
import { assets, LASM } from "../../config";
import { Button, Box, Divider, FormControlLabel, Radio } from "@mui/material";

export default function CharacterRadioGroup({
  assetObject,
  setAssetObject,
}: {
  assetObject: AssetType;
  setAssetObject: (assetObject: AssetType) => void;
}) {
  const { asset, device } = assetObject;
  const characters = useMemo(() => {
    let assetIdx = -1;
    for (let i = 0; i < assets.length; i++) {
      if (asset == assets[i]) {
        assetIdx = i;
      }
    }
    if (assetIdx == 0) {
      return LASM[device - 1];
    }
    //Todo
    return LASM[device - 1];
  }, [asset, device]);
  const falseList = useMemo(() => {
    if (characters === undefined) {
      return [];
    }
    return Array.from({ length: characters.length }, () => false);
  }, [characters]);

  return (
    <Box
      sx={{ display: "grid", gridTemplateColumns: "repeat(3, 250px)" }}
      gap={5}
    >
      {(characters ?? []).map((character, characterIndex) => (
        <FlexBox
          sx={{
            flexDirection: "column",
            flexWrap: "wrap",
            height: "fit-content",
          }}
          key={`Box-${characterIndex}-${character}`}
        >
          <Button
            variant="outlined"
            onClick={() => {
              if (assetObject.selectedList[characterIndex] == true) {
                setAssetObject({
                  ...assetObject,
                  selectedList: falseList,
                  characters: [],
                });
              } else {
                let copy = [...falseList];
                copy[characterIndex] = true;
                setAssetObject({
                  ...assetObject,
                  selectedList: [...copy],
                  characters: [character[0]],
                });
              }
            }}
          >
            {character[0]}
          </Button>
          {assetObject.selectedList[characterIndex] && (
            <Box margin={1}>
              <FlexBox sx={{ flexDirection: "column" }}>
                {character[1].map((value, index) => (
                  <>
                    <FormControlLabel
                      key={`characterChild-${value}-${index}`}
                      label={value[0]}
                      control={
                        <Radio
                          checked={assetObject.characters[1] === value[0]}
                        />
                      }
                      onClick={() =>
                        setAssetObject({
                          ...assetObject,
                          characters: [character[0], value[0]],
                          pathway: [value[1], value[2]],
                        })
                      }
                    />
                    <Divider />
                  </>
                ))}
              </FlexBox>
            </Box>
          )}
        </FlexBox>
      ))}
    </Box>
  );
}
