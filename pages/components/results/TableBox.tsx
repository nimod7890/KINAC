import { TableContainer, Paper, Table } from "@mui/material";
import { ReactNode } from "react";

export const TableBox = ({ children }: { children: ReactNode }) => {
  return (
    <TableContainer
      component={Paper}
      sx={{
        boxShadow: "none",
        border: "1px solid gray",
      }}
    >
      <Table>{children}</Table>
    </TableContainer>
  );
};
