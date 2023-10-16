import {
  VulneravilitySchema,
  VulneravilitiesSchema,
  TecheniqueSchema,
  TecheniquesSchema,
} from "../@types";

export function getTechnique(
  vulneravility: VulneravilitySchema
): TecheniqueSchema {
  switch (vulneravility) {
    case "V1":
      return "T3";
    case "V2":
      return "T2";
    case "V3":
      return "";
    case "V4":
      return "T4";
    case "V5":
      return "T5";
    case "V6":
      return "T1";
    default:
      return "";
  }
}
export function getTechniques(
  vulneravilities: VulneravilitiesSchema
): TecheniquesSchema {
  return vulneravilities
    .map((vulneravility) => getTechnique(vulneravility))
    .filter((technique) => technique);
}
export function getFullTechniqueName(technique: TecheniqueSchema): string {
  switch (technique) {
    case "T1":
      return "Exploit System Firmware Update";
    case "T2":
      return "Valid Accounts";
    case "T3":
      return "Denial of Service";
    case "T4":
      return "Supply Chain Compromise";
    case "T5":
      return "Exploitation for Client Execution";
    default:
      return "";
  }
}
