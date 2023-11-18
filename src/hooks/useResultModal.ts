import { useMemo } from "react";
import { AttackCaseSchema } from "../@types";
import {
  getImpactsOfTechniques,
  getPathways,
  getTechniques,
  getVulnerabilitiesOfPathways,
} from "../utils";

export const useResultModal = (attackCase: AttackCaseSchema) => {
  const characters = useMemo(() => {
    return attackCase.attributes.map((attribute) => attribute.character.name);
  }, [attackCase.attributes]);
  const pathways = getPathways(attackCase);
  const vulnerabilities = getVulnerabilitiesOfPathways(pathways);
  const techniques = getTechniques(vulnerabilities);
  const impacts = getImpactsOfTechniques(techniques);
  console.log(characters, pathways, vulnerabilities, techniques, impacts);
  return { characters, pathways, vulnerabilities, techniques, impacts };
};
