import { IconButton, Tooltip } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
export const AddButton = () => {
  return (
    <Tooltip arrow title="Add new Characteristic, Vul, Technique and Impact">
      <IconButton
        sx={{
          width: "55px",
          height: "55px",
          padding: "5px",
          borderRadius: "5px",
          border: "1px solid gray",
        }}
      >
        <AddIcon />
      </IconButton>
    </Tooltip>
  );
};
