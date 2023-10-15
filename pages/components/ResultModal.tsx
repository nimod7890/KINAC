import { useMemo } from "react";
import { AttackCaseSchema, PathwaysSchema } from "../@types";
import { ModalLayout } from "./ModalLayout";
import { Typography } from "@mui/material";

export default function ResultModal({
  attackCase,
  onClose,
}: {
  attackCase: AttackCaseSchema;
  onClose: () => void;
}) {
  const pathways = useMemo(() => {
    const pathways: PathwaysSchema = attackCase.attributes
      .map((attribute) => attribute.character.pathways)
      .flat();
    return pathways;
  }, [attackCase.attributes]);

  return (
    <ModalLayout title="Attack Case" onClose={onClose}>
      <Typography>Target: {attackCase.target}</Typography>
      <Typography>Type: {attackCase.type}</Typography>
      <Typography>Characters</Typography>
      {attackCase.attributes.map((attribute, index) => (
        <>
          <Typography>
            {index + 1}. {attribute.name}-{attribute.character.name}
          </Typography>
          <Typography>Available Value: {attribute.character.value}</Typography>
        </>
      ))}
      <Typography>Pathways: {pathways.join(", ")}</Typography>
      {/* <Stack spacing={2}>
          <Typography fontWeight="hairline">
            구분: {device === 1 ? "Hardware" : "Software"}
            <br />
            특성: {characters[0]} - {characters[1]}
          </Typography>
          <Divider />
          <AttackPathway pathway={pathway} />
          <AttackCase pathway={pathway} />
        </Stack> */}
    </ModalLayout>
  );
}
