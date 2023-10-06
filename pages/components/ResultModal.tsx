import { Divider, Typography, Stack } from "@mui/material";
import { ModalLayout } from "./ModalLayout";
import AttackCase from "./AttackCase";
import AttackPathway from "./AttackPathway";
import { AssetType } from "../types";

export const ResultModal = ({
  assetObject,
  onClose,
}: {
  assetObject: AssetType;
  onClose: () => void;
}) => {
  const { asset, device, pathway, characters } = assetObject;
  return (
    <ModalLayout title={asset} onClose={onClose}>
      <Stack spacing={2}>
        <Typography fontWeight="hairline">
          구분: {device === 1 ? "Hardware" : "Software"}
          <br />
          특성: {characters[0]} - {characters[1]}
        </Typography>
        <Divider />
        <AttackPathway pathway={pathway} />
        <AttackCase pathway={pathway} />
      </Stack>
    </ModalLayout>
  );
};
