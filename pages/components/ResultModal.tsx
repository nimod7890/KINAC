import { AttackCaseSchema } from "../@types";
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
  getImpactsOfTechniques,
  getPathways,
  getTechniques,
  getVulneravilitiesOfPathway,
} from "../utils";
import { useResultModal } from "../hooks/useResultModal";
import { ReactNode } from "react";
import InfoBox from "./InfoBox";

export default function ResultModal({
  attackCase,
  onClose,
}: {
  attackCase: AttackCaseSchema;
  onClose: () => void;
}) {
  return (
    <ModalLayout title="Result" onClose={onClose}>
      <Stack direction="row">
        <Stack>
          <Object attackCase={attackCase} />
          <Summary attackCase={attackCase} />
        </Stack>
        <AttackCases attackCase={attackCase} />
      </Stack>
    </ModalLayout>
  );
}

const Summary = ({ attackCase }: { attackCase: AttackCaseSchema }) => {
  const { pathways, vulneravilities, techniques, impacts } = useResultModal(attackCase);
  return (
    <InfoBox title="Summary" configs={{ boxWidth: "100%" }}>
      <TableBox>
        <Row
          title="Pathway"
          content1={<Typographies textArray={pathways} parse={getFullPathwayName} />}
        />
        <Row
          title="Vulneravility"
          content1={<Typographies textArray={vulneravilities} parse={getFullVulneravilityName} />}
        />
        <Row
          title="Technique"
          content1={<Typographies textArray={techniques} parse={getFullTechniqueName} />}
        />
        <Row
          title="Impact"
          content1={<Typographies textArray={impacts} parse={getFullImpactName} />}
        />
      </TableBox>
    </InfoBox>
  );
};
const TableBox = ({ children }: { children: ReactNode }) => {
  return (
    <TableContainer
      component={Paper}
      sx={{
        boxShadow: "none",
        border: "1px solid gray",
      }}
    >
      <Table>
        <TableBody>{children}</TableBody>
      </Table>
    </TableContainer>
  );
};

const Object = ({ attackCase }: { attackCase: AttackCaseSchema }) => {
  const { characters } = useResultModal(attackCase);
  return (
    <InfoBox title="Object" configs={{ boxWidth: "100%" }}>
      <TableBox>
        <Row title="Target" content1={attackCase.target} />
        <Row title="Type" content1={attackCase.type} />
        <Row title="Characters" content1={<Typographies textArray={characters} />} />
      </TableBox>
    </InfoBox>
  );
};

const AttackCases = ({ attackCase }: { attackCase: AttackCaseSchema }) => {
  const pathways = getPathways(attackCase);
  return (
    <InfoBox title="Attack Cases" configs={{ boxWidth: "100%" }}>
      {pathways.map((pathway, index) => {
        const vulneravilities = getVulneravilitiesOfPathway(pathway);
        const techniques = getTechniques(vulneravilities);
        const impacts = getImpactsOfTechniques(techniques);

        return (
          <TableBox key={pathway}>
            <Row
              title={`Attack case ${index + 1}`}
              content1={(() => {
                let text = `[${pathway}] ${vulneravilities.join(",")}`;
                if (techniques.length) {
                  text += ` - ${techniques.join(",")}`;
                  if (impacts.length) {
                    text += ` - ${impacts.join(",")}`;
                  }
                }
                return text;
              })()}
            />
            <Row title="Pathway" content1={`${getFullPathwayName(pathway)}`} content2={pathway} />
            {vulneravilities.length > 0 && (
              <>
                <Row
                  title="Vulneravility"
                  content1={
                    <Typographies textArray={vulneravilities} parse={getFullVulneravilityName} />
                  }
                  content2={<Typographies textArray={vulneravilities} />}
                />
                {techniques.length > 0 && (
                  <>
                    <Row
                      title="Technique"
                      content1={
                        <Typographies textArray={techniques} parse={getFullTechniqueName} />
                      }
                      content2={<Typographies textArray={techniques} />}
                    />
                    {impacts.length > 0 && (
                      <Row
                        title="Impact"
                        content1={<Typographies textArray={impacts} parse={getFullImpactName} />}
                        content2={<Typographies textArray={impacts} />}
                      />
                    )}
                  </>
                )}
              </>
            )}
          </TableBox>
        );
      })}
    </InfoBox>
  );
};

const Row = ({
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

const Typographies = ({
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
