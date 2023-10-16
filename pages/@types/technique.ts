import { z } from "zod";

const techniqueSchema = z.string();
export const techniquesSchema = techniqueSchema.array();
export type TecheniqueSchema = z.infer<typeof techniqueSchema>;
export type TecheniquesSchema = z.infer<typeof techniquesSchema>;
