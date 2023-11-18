import { TecheniqueSchema, TecheniquesSchema } from "../@types/technique";

export function getImpactsOfTechnique(technique: TecheniqueSchema): string[] {
  switch (technique) {
    case "T1":
      return ["I1", "I2", "I4"];
    case "T2":
      return ["I1"];
    case "T3":
      return ["I4", "I5"];
    case "T4":
      return ["I3"];
    default:
      return [];
  }
}

export function getImpactsOfTechniques(techniques: TecheniquesSchema): string[] {
  return techniques
    .map((technique) => getImpactsOfTechnique(technique))
    .flat()
    .filter((techique) => techique);
}

export function getFullImpactName(impact: string): string {
  switch (impact) {
    case "I1":
      return "Provide inaccurate data leading to bad management decisions";
    case "I2":
      return "Shutdown of a process due to strict policies regarding safety systems";
    case "I3":
      return "Toggles breakers to the open state";
    case "I4":
      return "Denial of view";
    case "I5":
      return "Reboot manually";
    default:
      return "";
  }
}
