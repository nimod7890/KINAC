import { z } from "zod";

export const typeSchema = z.string().nullable();
const typesSchema = typeSchema.array();
export type TypeSchema = z.infer<typeof typeSchema>;
export type TypesSchema = z.infer<typeof typesSchema>;
