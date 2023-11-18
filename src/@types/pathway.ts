import { z } from "zod";

const pathwaySchema = z.string();
export const pathwaysSchema = pathwaySchema.array();
export type PathwaySchema = z.infer<typeof pathwaySchema>;
export type PathwaysSchema = z.infer<typeof pathwaysSchema>;
