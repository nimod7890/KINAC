import { useMemo } from "react";
import { AttackCaseSchema } from "../@types";
import {
  getImpactsOfTechniques,
  getPathways,
  getTechniques,
  getVulneravilitiesOfPathways,
} from "../utils";

export const useResultModal = (attackCase: AttackCaseSchema) => {
  const characters = useMemo(() => {
    return attackCase.attributes.map((attribute) => attribute.character.name);
  }, [attackCase.attributes]);
  const pathways = getPathways(attackCase);
  const vulneravilities = getVulneravilitiesOfPathways(pathways);
  const techniques = getTechniques(vulneravilities);
  const impacts = getImpactsOfTechniques(techniques);
  console.log(characters, pathways, vulneravilities, techniques, impacts);
  return { characters, pathways, vulneravilities, techniques, impacts };
};
