import { TableBody, Typography } from "@mui/material";
import { AttackCaseSchema } from "../../@types";
import {
  getPathways,
  getVulnerabilitiesOfPathway,
  getTechniques,
  getImpactsOfTechniques,
  getFullPathwayName,
  getFullVulnerabilityName,
  getFullTechniqueName,
  getFullImpactName,
} from "../../utils";
import InfoBox from "../commons/InfoBox";
import { Row, TableHeader } from "./Row";
import { TableBox } from "./TableBox";
import { Typographies } from "./Typographies";

export const AttackCases = ({ attackCase }: { attackCase: AttackCaseSchema }) => {
  const pathways = getPathways(attackCase);
  return (
    <InfoBox title="Attack Cases" configs={{ boxWidth: "100%" }}>
      {pathways.length === 0 ? (
        <Typography sx={{ width: "400px" }}>No Cases</Typography>
      ) : (
        pathways.map((pathway, index) => {
          const vulnerabilities = getVulnerabilitiesOfPathway(pathway);
          const techniques = getTechniques(vulnerabilities);
          const impacts = getImpactsOfTechniques(techniques);

          return (
            <TableBox key={pathway}>
              <TableHeader
                title={`Case ${index + 1}`}
                content1={(() => {
                  let text = `[${pathway}] ${vulnerabilities.join(",")}`;
                  if (techniques.length) {
                    text += ` - ${techniques.join(",")}`;
                    if (impacts.length) {
                      text += ` - ${impacts.join(",")}`;
                    }
                  }
                  return text;
                })()}
              />
              <TableBody>
                <Row
                  title="Pathway"
                  content1={`${getFullPathwayName(pathway)}`}
                  content2={pathway}
                />
                {vulnerabilities.length > 0 && (
                  <>
                    <Row
                      title="Vulnerability"
                      content1={
                        <Typographies
                          textArray={vulnerabilities}
                          parse={getFullVulnerabilityName}
                        />
                      }
                      content2={<Typographies textArray={vulnerabilities} />}
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
                            content1={
                              <Typographies textArray={impacts} parse={getFullImpactName} />
                            }
                            content2={<Typographies textArray={impacts} />}
                          />
                        )}
                      </>
                    )}
                  </>
                )}
              </TableBody>
            </TableBox>
          );
        })
      )}
    </InfoBox>
  );
};
