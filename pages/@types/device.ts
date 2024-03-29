import { z } from "zod";
import { deviceEnum } from "../enums/deviceEnum";

export const deviceSchema = deviceEnum;
const devicesSchema = deviceSchema.array();
export type DeviceSchema = z.infer<typeof deviceSchema>;
export type DevicesSchema = z.infer<typeof devicesSchema>;
