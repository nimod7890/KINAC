import { DeviceSchema, CharacteristicsSchema } from "../@types";
import {
  No,
  Available,
  Yes,
  Unavailable,
} from "../enums/characteristicValueEnum";
import { Hardware, Software } from "../enums/deviceEnum";

export function getCharacters({
  device,
  attribute,
}: {
  device: DeviceSchema;
  attribute: string;
}): CharacteristicsSchema {
  switch (device) {
    case Hardware:
      switch (attribute) {
        case "Firmware Code":
          return [{ name: "Storage", value: No, pathways: ["PM/D", "PM/S"] }];
        case "HMI":
          return [
            { name: "Local Integral", value: No, pathways: ["PS"] },
            { name: "Remote", value: No, pathways: ["PS"] },
            {
              name: "Maintenance tool connection",
              value: Available,
              pathways: ["PS"],
            },
            { name: "Access Restriction", value: No, pathways: ["PS"] },
          ];

        case "Configuration Setting":
          return [
            { name: "Storage", value: No, pathways: ["PS", "WN", "PM"] },
            { name: "Change", value: null, pathways: ["PS", "WN", "PM"] }, //
          ];
        case "Communication":
          return [
            { name: "LAN (IEEE 802.3)", value: Yes, pathways: ["WN/E"] },
            { name: "Serial Port (RS-232)", value: No, pathways: ["WN/S"] },
            {
              name: "Ethernet Protocols(RSTP, PRP, HSR)",
              value: Yes,
              pathways: ["WN/T"],
            },
          ];
        case "Audit/Event Log":
          return [{ name: "All", value: No, pathways: ["PS", "WN", "PM"] }];
        case "Connector":
          return [
            {
              name: "Analog, Contact, Parse I/O Signal, USB Port",
              value: Available,
              pathways: ["PS", "PM"],
            },
          ];
        case "Interface":
          return [{ name: "Console", value: Yes, pathways: ["PS"] }];
      }
    case Software:
      switch (attribute) {
        case "Port":
          return [{ name: "All", value: No, pathways: ["WN"] }];
        case "HMI":
          return [
            {
              name: "Software Access Enforcement",
              value: No,
              pathways: ["WN"],
            },
            {
              name: "Change Configuration Setting",
              value: null,
              pathways: ["WN"],
            },
            {
              name: "Change Operational Parameter",
              value: No,
              pathways: ["WN"],
            },
            {
              name: "Multi-users & individual authentication",
              value: No,
              pathways: ["WN"],
            },
          ];
        case "File system":
          return [
            {
              name: "Externally accessible file system",
              value: No,
              pathways: ["SW"],
            },
          ];
        case "Data Extraction":
          return [
            {
              name: "USB/Memory Card Interface",
              value: No,
              pathways: ["PM"],
            },
          ];
        case "Firmware":
          return [
            {
              name: "Firmware Update",
              value: Unavailable,
              pathways: ["SW/F"],
            },
          ];
        case "3rd party software":
          return [
            { name: "Add/Delete", value: Unavailable, pathways: ["SW/P"] },
          ];
        case "Communication":
          return [{ name: "Communication", value: No, pathways: ["WN", "WL"] }];
        case "Audit/Event Log":
          return [
            {
              name: "Audit/Event Log 저장 기능",
              value: No,
              pathways: ["PS", "WN", "PM"],
            },
          ];
      }
    default:
      return [];
  }
}
