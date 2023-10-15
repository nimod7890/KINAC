import { z } from "zod";

export const characteristicValueEnum = z.enum([
  "Yes",
  "No",
  "Available",
  "Unavailable",
] as const);
export const Yes = characteristicValueEnum.Enum.Yes;
export const No = characteristicValueEnum.Enum.No;
export const Available = characteristicValueEnum.Enum.Available;
export const Unavailable = characteristicValueEnum.Enum.Unavailable;
export type ValueEnum =
  | typeof Yes
  | typeof No
  | typeof Available
  | typeof Unavailable
  | null;
