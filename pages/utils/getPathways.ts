import {
  AttackCaseSchema,
  PathwaysSchema,
  PathwaySchema,
  CharacteristicSchema,
} from "../@types";
import { ValueEnum } from "../enums/characteristicValueEnum";

export function getPathways(attackCase: AttackCaseSchema): PathwaysSchema {
  const pathways: PathwaysSchema = attackCase.attributes
    .map((attribute) => attribute.character.pathways)
    .flat();
  return Array.from(new Set(pathways));
}
export function getFullPathwayName(pathway: PathwaySchema): string {
  switch (pathway) {
    case "PS":
      return "Physical Access";
    case "PS/M":
      return "Electronic Acess(Eletronic Key)";
    case "PS/E":
      return "Identification System Access";
    case "PS/I":
      return "PCM Module Pins";
    case "WN":
      return "Wired Network";
    case "WN/E":
      return "Wired Network - Ethernet";
    case "WN/C":
      return "Wired Network - Coaxial Cable";
    case "WN/F":
      return "Wired Network - FTP";
    case "WN/S":
      return "Wired Network - SSH";
    case "WN/T":
      return "Wired Network - TCP";
    case "WN/D":
      return "Wired Network - DNS";
    case "WL":
      return "Wireless Network";
    case "WL/W":
      return "Wireless Network - Wifi(802.11)";
    case "WL/B":
      return "Wireless Network - Bluetooth";
    case "PM":
      return "Portable Media";
    case "PM/D":
      return "Portable Media - Device Connect";
    case "PM/S":
      return "Portable Media - Storage Connect";
    case "PM/I":
      return "Portable Media - IEEE 1140.x";
    case "SC":
      return "Supply Chain";
    case "SW":
      return "Software";
    case "SW/F":
      return "Software - Firmware";
    case "SW/P":
      return "Software - Software Program";
    default:
      return "";
  }
}

export function getPathwaysFromCharacter({
  character,
  value,
}: {
  character: CharacteristicSchema;
  value: ValueEnum;
}): PathwaysSchema {
  if (character.value === value) {
    return character.pathways;
  }
  return [];
}
