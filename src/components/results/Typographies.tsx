import { Typography } from "@mui/material";

export const Typographies = ({
  textArray,
  parse,
}: {
  textArray: string[];
  parse?: (text: string) => string;
}) => {
  if (textArray.length === 0) {
    return <Typography>-</Typography>;
  }
  return (
    <>
      {textArray.map((text) => (
        <Typography key={text} sx={{ width: "max-content" }}>
          {parse ? parse(text) : text}
        </Typography>
      ))}
    </>
  );
};
