import { AttackCaseSchema } from "../../@types";
import { ModalLayout } from "../commons/ModalLayout";
import { Stack } from "@mui/material";
import { Summary } from "./Summary";
import { AttackCases } from "./AttackCases";
import { Object } from "./Object";

export default function ResultModal({
  attackCase,
  onClose,
}: {
  attackCase: AttackCaseSchema;
  onClose: () => void;
}) {
  return (
    <ModalLayout title="Result" onClose={onClose}>
      <Stack direction="row">
        <Stack>
          <Object attackCase={attackCase} />
          <Summary attackCase={attackCase} />
        </Stack>
        <AttackCases attackCase={attackCase} />
      </Stack>
    </ModalLayout>
  );
}
