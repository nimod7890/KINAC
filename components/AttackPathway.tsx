import { pathWay } from "../config";
import { PwType } from "../types";
import { Typography } from "@mui/material";

export default function AttackPathway({ pathway }: { pathway: PwType }) {
  return (
    <Typography fontWeight="bold">
      Attack Pathway
      {(() => {
        const selectedPathway: string[] = [];
        for (const key of pathway[1]) {
          pathWay[key] != undefined && selectedPathway.push(pathWay[key]);
        }
        let result = "";
        if (selectedPathway.length >= 1) {
          result += `: ${selectedPathway[0]}`;
        }
        return result + selectedPathway.slice(1).map((path) => ` - ${path}`);
      })()}
    </Typography>
  );
}
