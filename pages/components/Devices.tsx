import { Stack, Radio, FormControlLabel } from "@mui/material";
import { DeviceSchema, DevicesSchema } from "../@types";
import { Hardware, Software } from "../enums/deviceEnum";
import { InfoBox } from ".";

export default function Devices({
  device: selectedDivce,
  onDeviceChange,
}: {
  device: DeviceSchema;
  onDeviceChange: (device: DeviceSchema) => void;
}) {
  const devices: DevicesSchema = [Hardware, Software];
  return (
    <InfoBox title="Device">
      <Stack direction="row" spacing={5} sx={{ height: 56 }}>
        {devices.map((device) => {
          return (
            <FormControlLabel
              key={device}
              label={device}
              control={<Radio checked={device === selectedDivce} />}
              onClick={() => onDeviceChange(device)}
            />
          );
        })}
      </Stack>
    </InfoBox>
  );
}
