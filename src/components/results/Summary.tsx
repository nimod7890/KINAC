import { AttackCaseSchema } from "../../@types";
import { useResultModal } from "../../hooks/useResultModal";
import {
  getFullPathwayName,
  getFullVulnerabilityName,
  getFullTechniqueName,
  getFullImpactName,
} from "../../utils";
import InfoBox from "../commons/InfoBox";
import { Row } from "./Row";
import { TableBox } from "./TableBox";
import { Typographies } from "./Typographies";

export const Summary = ({ attackCase }: { attackCase: AttackCaseSchema }) => {
  const { pathways, vulnerabilities, techniques, impacts } = useResultModal(attackCase);
  return (
    <InfoBox title="Summary" configs={{ boxWidth: "100%" }}>
      <TableBox>
        <Row
          title="Pathway"
          content1={<Typographies textArray={pathways} parse={getFullPathwayName} />}
        />
        <Row
          title="Vulnerability"
          content1={<Typographies textArray={vulnerabilities} parse={getFullVulnerabilityName} />}
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
