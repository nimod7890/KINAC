import { styled } from "@mui/material/styles";

export const FlexSpaceBetween = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "0.625rem",
}));

export const FlexCenter = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const FlexBox = styled("div")(() => ({
  display: "flex",
}));
