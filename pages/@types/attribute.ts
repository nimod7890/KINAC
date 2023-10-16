import { z } from "zod";
import { characteristicValueEnum } from "../enums/characteristicValueEnum";
import { pathwaysSchema } from "./pathway";

const characteristicSchema = z.object({
  name: z.string(),
  value: characteristicValueEnum.nullable(),
  pathways: pathwaysSchema,
});
export const characteristicsSchema = characteristicSchema.array();
export type CharacteristicSchema = z.infer<typeof characteristicSchema>;
export type CharacteristicsSchema = z.infer<typeof characteristicsSchema>;

export const attributeSchema = z.object({
  name: z.string(),
  character: characteristicSchema,
});
export const attributesSchema = attributeSchema.array();
export type AttributeSchema = z.infer<typeof attributeSchema>;
export type AttributesSchema = z.infer<typeof attributesSchema>;
