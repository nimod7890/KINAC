import { Button, Stack } from "@mui/material";
import { useState } from "react";
import type { AttackCaseSchema } from "./@types";
import { Hardware } from "./enums/deviceEnum";
import { Attributes, Type, Devices, Target, ResultModal } from "./components";
import { FlexSpaceBetween } from "./components/commons/FlexBox";
import { AddButton } from "./components/AddButton";
import { ResetButton } from "./components/ResetButton";

/** Todo 
 - case row header로 변경
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
  const [attackCase, setAttackCase] = useState<AttackCaseSchema>(initialAssetObject);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Stack direction="row">
        <Target
          selectedTarget={attackCase.target}
          onTargetChange={(target) => setAttackCase((asset) => ({ ...asset, target }))}
        />
        <ResetButton
          disabled={attackCase.attributes.length === 0}
          onClick={() => setAttackCase(initialAssetObject)}
        />
      </Stack>
      <FlexSpaceBetween>
        <Stack direction="row">
          <Type
            selectedType={attackCase.type}
            onTypeChange={(type) => setAttackCase((asset) => ({ ...asset, type }))}
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
        <Stack direction="row" sx={{ alignSelf: "end" }}>
          <SubmitButton
            disabled={attackCase.attributes.length === 0}
            onClick={() => setIsOpen(true)}
          />
          <AddButton />
        </Stack>
      </FlexSpaceBetween>
      <Attributes
        attackCase={attackCase}
        onAttributesChange={(attributes) => setAttackCase((asset) => ({ ...asset, attributes }))}
      />
      {isOpen && <ResultModal attackCase={attackCase} onClose={() => setIsOpen(false)} />}
    </>
  );
}

const SubmitButton = ({ disabled, onClick }: { disabled: boolean; onClick: () => void }) => {
  return (
    <Button
      variant="contained"
      disabled={disabled}
      color="success"
      sx={{
        padding: "10px 60px",
        fontSize: "20px",
        fontWeight: 600,
      }}
      onClick={onClick}
    >
      Check Pathways
    </Button>
  );
};
