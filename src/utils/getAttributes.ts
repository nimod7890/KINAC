import { DeviceSchema } from "../@types";
import { Hardware, Software } from "../enums/deviceEnum";

export function getAttributes(device: DeviceSchema): string[] {
  switch (device) {
    case Hardware:
      return [
        "Firmware Code",
        "HMI",
        "Configuration Setting",
        "Communication",
        "Audit/Event Log",
        "Connector",
        "Interface",
      ];
    case Software:
      return [
        "Port",
        "HMI",
        "File system",
        "Data Extraction",
        "Firmware",
        "3rd party software",
        "Communication",
        "Audit/Event Log",
      ];
    default:
      return [];
  }
}
