import { Select, MenuItem, OutlinedInput } from "@mui/material";
import { TypeSchema, TypesSchema } from "../@types";
import { InfoBox } from ".";

export default function Type({
  selectedType,
  onTypeChange,
}: {
  selectedType: TypeSchema;
  onTypeChange: (type: TypeSchema) => void;
}) {
  const types: TypesSchema = [
    "Class A.1",
    "Class A.2",
    "Class A.3",
    "Class B.1",
    "Class B.2",
    "Class B.3",
    "Class C",
  ];
  return (
    <InfoBox title="Type">
      <Select
        value={selectedType}
        renderValue={(value) => value}
        input={<OutlinedInput id="class" />}
      >
        {types.map((type) => {
          return (
            <MenuItem key={type} onClick={() => onTypeChange(type)}>
              {type}
            </MenuItem>
          );
        })}
      </Select>
    </InfoBox>
  );
}
