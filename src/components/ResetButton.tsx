import { IconButton } from "@mui/material";
import BackspaceIcon from "@mui/icons-material/Backspace";

export const ResetButton = ({ disabled, onClick }: { disabled: boolean; onClick: () => void }) => {
  return (
    <IconButton
      disabled={disabled}
      onClick={onClick}
      sx={{
        alignSelf: "end",
        width: "55px",
        height: "55px",
        padding: "5px",
        borderRadius: "5px",
        border: "1px solid gray",
      }}
    >
      <BackspaceIcon />
    </IconButton>
  );
};
