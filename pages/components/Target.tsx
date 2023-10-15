import { OutlinedInput } from "@mui/material";
import { TargetSchema } from "../@types";
import { InfoBox } from ".";

export default function Target({
  selectedTarget,
  onTargetChange,
}: {
  selectedTarget: TargetSchema;
  onTargetChange: (target: TargetSchema) => void;
}) {
  return (
    <InfoBox title="Asset Name" configs={{ isBorderExist: false }}>
      <OutlinedInput
        value={selectedTarget}
        onChange={(event) => onTargetChange(event.target.value)}
      />
    </InfoBox>
  );
}
