import { z } from "zod";

export const targetSchema = z.string().nullable();
const targetsSchema = targetSchema.array();
export type TargetSchema = z.infer<typeof targetSchema>;
export type TargetsSchema = z.infer<typeof targetsSchema>;
