import { Stack, Typography } from "@mui/material";
import { ReactNode } from "react";

const width = "400px";

export default function InfoBox({
  title,
  configs = {},
  children,
}: {
  title?: string;
  configs?: {
    boxWidth?: string;
    isBorderExist?: boolean;
    stackDirection?: "row" | "column";
  };
  children: ReactNode;
}) {
  const { isBorderExist = false, boxWidth = width, stackDirection = "column" } = configs;
  return (
    <Stack
      spacing={1}
      direction={stackDirection}
      sx={{
        width: boxWidth,
        border: isBorderExist ? "1px solid #808080" : "",
        padding: isBorderExist ? "1rem" : 0,
        borderRadius: "10px",
        justifyContent: `${stackDirection == "row" && "space-between"}`,
        alignItems: `${stackDirection === "row" && "center"}`,
        minWidth: "fit-content",
      }}
    >
      {title && (
        <Typography sx={{ fontSize: 18, fontWeight: 700 }} color="gray">
          {title}
        </Typography>
      )}

      {children}
    </Stack>
  );
}
