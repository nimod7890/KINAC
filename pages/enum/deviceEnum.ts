import { z } from "zod";

export const deviceEnum = z.enum(["Hardware", "Software"] as const);
export const Hardware = deviceEnum.Enum.Hardware;
export const Software = deviceEnum.Enum.Software;
export type deviceEnum = typeof Hardware | typeof Software;
