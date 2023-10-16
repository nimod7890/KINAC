import {
  PathwaySchema,
  VulneravilitiesSchema,
  PathwaysSchema,
  VulneravilitySchema,
} from "../@types";

export function getVulneravilitiesOfPathway(pathway: PathwaySchema): VulneravilitiesSchema {
  switch (pathway) {
    case "WN/T":
      return ["V1"];
    case "SW":
      return ["V2", "V3"];
    case "SC":
      return ["V4"];
    case "SW/F":
      return ["V6"];
    default:
      return [];
  }
}
export function getVulneravilitiesOfPathways(pathways: PathwaysSchema): VulneravilitiesSchema {
  return pathways
    .map((pathway) => getVulneravilitiesOfPathway(pathway))
    .flat()
    .filter((pathway) => pathway);
}
export function getFullVulneravilityName(vulneravility: VulneravilitySchema) {
  switch (vulneravility) {
    case "V1":
      return "Unauthenticated ports (Port/TCP)";
    case "V2":
      return "Use of Inherently Dangerous Function";
    case "V3":
      return "Deserialization of Untrusted Data";
    case "V4":
      return "Supply Chain Compromise";
    case "V5":
      return "Out of Bounds Read";
    case "V6":
      return "Bypass the digital signature check";
    default:
      return "";
  }
}
