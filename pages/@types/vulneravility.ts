import { z } from "zod";

const vulneravilitySchema = z.string();
export const vulneravilitiesSchema = vulneravilitySchema.array();
export type VulneravilitySchema = z.infer<typeof vulneravilitySchema>;
export type VulneravilitiesSchema = z.infer<typeof vulneravilitiesSchema>;
