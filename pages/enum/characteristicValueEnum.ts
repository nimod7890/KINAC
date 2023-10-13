import { z } from "zod";

export const characteristicValueEnum = z.enum([
  "Yes",
  "No",
  "A",
  "N/A",
] as const);
export const Yes = characteristicValueEnum.Enum.Yes;
export const No = characteristicValueEnum.Enum.No;
export const Available = characteristicValueEnum.Enum.A;
export const Unavailable = characteristicValueEnum.Enum["N/A"];
export type ValueEnum =
  | typeof Yes
  | typeof No
  | typeof Available
  | typeof Unavailable
  | null;
