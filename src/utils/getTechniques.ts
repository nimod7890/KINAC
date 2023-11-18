import {
  VulnerabilitySchema,
  VulnerabilitiesSchema,
  TecheniqueSchema,
  TecheniquesSchema,
} from "../@types";

export function getTechnique(vulneravility: VulnerabilitySchema): TecheniqueSchema {
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
export function getTechniques(vulnerabilities: VulnerabilitiesSchema): TecheniquesSchema {
  return vulnerabilities
    .map((vulnerability) => getTechnique(vulnerability))
    .filter((technique) => technique);
}
export function getFullTechniqueName(technique: TecheniqueSchema): string {
  switch (technique) {
    case "T1":
      return "[T0857] Exploit System Firmware Update";
    case "T2":
      return "[T0812] Valid Accounts";
    case "T3":
      return "[T0814] Denial of Service";
    case "T4":
      return "[T0862] Supply Chain Compromise";
    case "T5":
      return "[T1203] Exploitation for Client Execution";
    default:
      return "";
  }
}
