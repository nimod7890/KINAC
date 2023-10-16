import { Button, Stack } from "@mui/material";
import { useState } from "react";
import type { AttackCaseSchema } from "./@types";
import { Hardware } from "./enums/deviceEnum";
import { Attributes, Type, Devices, Target, ResultModal } from "./components";
import { FlexSpaceBetween } from "./components/FlexBox";

/** Todo 
 - result modal 
 - impact type 생성
 - 용어 정리 
 - 파일 분리 (bodylayout 생성)
 - input modal 구현
 - 파일 구조 정리 
 - 라이브러리 정리 
*/
const initialAssetObject: AttackCaseSchema = {
  target: "S' Numerical Relay",
  type: "Class B.3",
  device: Hardware,
  attributes: [],
};

export default function Home() {
  const [attackCase, setAttackCase] =
    useState<AttackCaseSchema>(initialAssetObject);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Target
        selectedTarget={attackCase.target}
        onTargetChange={(target) =>
          setAttackCase((asset) => ({ ...asset, target }))
        }
      />
      <FlexSpaceBetween>
        <Stack direction="row">
          <Type
            selectedType={attackCase.type}
            onTypeChange={(type) =>
              setAttackCase((asset) => ({ ...asset, type }))
            }
          />
          <Devices
            device={attackCase.device}
            onDeviceChange={(device) =>
              setAttackCase((asset) => ({
                ...asset,
                device,
              }))
            }
          />
        </Stack>
        <Button
          variant="contained"
          disabled={attackCase.attributes.length === 0}
          color="success"
          sx={{
            padding: "10px 60px",
            alignSelf: "end",
            fontSize: "20px",
            fontWeight: 600,
          }}
          onClick={() => setIsOpen(true)}
        >
          Check Pathways
        </Button>
      </FlexSpaceBetween>
      <Attributes
        attackCase={attackCase}
        onAttributesChange={(attributes) =>
          setAttackCase((asset) => ({ ...asset, attributes }))
        }
      />
      {isOpen && (
        <ResultModal attackCase={attackCase} onClose={() => setIsOpen(false)} />
      )}
    </>
  );
}
