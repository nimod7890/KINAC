import { z } from "zod";
import { typeSchema } from "./type";
import { targetSchema } from "./target";
import { attributesSchema } from "./attribute";
import { deviceSchema } from "./device";

const attackCaseSchema = z.object({
  target: targetSchema,
  type: typeSchema,
  device: deviceSchema,
  attributes: attributesSchema,
});
export type AttackCaseSchema = z.infer<typeof attackCaseSchema>;
