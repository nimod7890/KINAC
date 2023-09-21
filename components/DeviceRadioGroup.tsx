import { Radio, FormControlLabel } from "@mui/material";
import { FlexCenter } from "./FlexBox";

export default function DeviceRadioGroup({
  device,
  setDevice,
}: {
  device: number;
  setDevice: (device: number) => void;
}) {
  return (
    <FlexCenter sx={{ gap: "20px" }}>
      <FormControlLabel
        label="hardware"
        control={<Radio checked={device === 1} />}
        onClick={() => setDevice(1)}
      />
      <FormControlLabel
        label="software"
        control={<Radio checked={device === 2} />}
        onClick={() => setDevice(2)}
      />
    </FlexCenter>
  );
}
