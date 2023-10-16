import { AttackCaseSchema, PathwaysSchema } from "../@types";
import { ModalLayout } from "./ModalLayout";
import {
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import {
  getFullImpactName,
  getFullPathwayName,
  getFullTechniqueName,
  getFullVulneravilityName,
  getTechniques,
  getVulneravilitiesOfPathway,
} from "../utils";
import { useResultModal } from "../hooks/useResultModal";

export default function ResultModal({
  attackCase,
  onClose,
}: {
  attackCase: AttackCaseSchema;
  onClose: () => void;
}) {
  const { characters, pathways, vulneravilities, techniques, impacts } =
    useResultModal(attackCase);
  return (
    <ModalLayout title="Attack Case" onClose={onClose}>
      <TableContainer
        component={Paper}
        sx={{
          boxShadow: "none",
          border: "1px solid gray",
        }}
      >
        <Table>
          <TableBody>
            <AttackCases pathways={pathways} />
            <Row title="Target" content={attackCase.target} />
            <Row title="Type" content={attackCase.type} />
            <Row
              title="Characters"
              content={characters.map((character) => (
                <Typography key={character}>{character}</Typography>
              ))}
            />
            <Row
              title="Pathways"
              content={pathways.map((pathway) => (
                <Typography key={pathway}>
                  [{pathway}] {getFullPathwayName(pathway)}
                </Typography>
              ))}
            />
            <Row
              title="Vulneravility"
              content={vulneravilities.map((vulneravility) => (
                <Typography key={vulneravility}>
                  [{vulneravility}] {getFullVulneravilityName(vulneravility)}
                </Typography>
              ))}
            />
            <Row
              title="Technique"
              content={techniques.map((technique) => (
                <Typography key={technique}>
                  [{technique}] {getFullTechniqueName(technique)}
                </Typography>
              ))}
            />
            <Row
              title="Impact"
              content={impacts.map((impact) => (
                <Typography key={impact}>
                  [{impact}] {getFullImpactName(impact)}
                </Typography>
              ))}
            />
          </TableBody>
        </Table>
      </TableContainer>
    </ModalLayout>
  );
}

const AttackCases = ({ pathways }: { pathways: PathwaysSchema }) => {
  return (
    <>
      {pathways.map((pathway, index) => {
        const vulneravilities = getVulneravilitiesOfPathway(pathway);
        const technique = getTechniques(vulneravilities);
        return (
          <Row
            key={pathway}
            title={`Attack case ${index + 1}`}
            content={`[${pathway}]${vulneravilities.join(", ")} - ${technique}`}
          />
        );
      })}
    </>
  );
};
const Row = ({
  title,
  content,
}: {
  title: string;
  content: React.ReactNode | string | null;
}) => (
  <TableRow>
    <TableCell sx={{ fontWeight: 700, width: "100px" }}>{title}</TableCell>
    <TableCell>
      <Stack spacing={0}>{content ?? "-"}</Stack>
    </TableCell>
  </TableRow>
);
