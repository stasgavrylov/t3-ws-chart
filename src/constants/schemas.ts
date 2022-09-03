import z from "zod";

export const sendDataSchema = z.object({
  value: z.number(),
});

export const dataRequestSchema = z.object({
  sendData: z.boolean(),
  step: z.number(),
  range: z.number().array().length(2),
});

export type SendDataT = z.TypeOf<typeof dataRequestSchema>;
