import { TableRow, TableCell, Stack, TableHead } from "@mui/material";

export const Row = ({
  title,
  content1,
  content2,
}: {
  title: string;
  content1: React.ReactNode | string | null;
  content2?: React.ReactNode | string | null;
}) => (
  <TableRow>
    <TableCell sx={{ fontWeight: 700, width: "130px" }}>{title}</TableCell>
    <TableCell>
      <Stack sx={{ minWidth: "300px" }} spacing={0}>
        {content1 ?? "-"}
      </Stack>
    </TableCell>
    <TableCell sx={{ width: "100px" }}>{content2}</TableCell>
  </TableRow>
);

export const TableHeader = ({
  title,
  content1,
}: {
  title: string;
  content1: React.ReactNode | string | null;
}) => {
  return (
    <TableHead>
      <TableRow>
        <TableCell sx={{ fontWeight: 700, width: "130px" }}>{title}</TableCell>
        <TableCell>
          <Stack sx={{ minWidth: "300px" }} spacing={0}>
            {content1 ?? "-"}
          </Stack>
        </TableCell>
        <TableCell sx={{ width: "100px" }} />
      </TableRow>
    </TableHead>
  );
};
