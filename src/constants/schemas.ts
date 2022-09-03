import z from "zod";

export const sendDataSchema = z.object({
  value: z.number(),
});

export const dataRequestSchema = z.object({
  sendData: z.boolean(),
});

export type SendDataT = z.TypeOf<typeof sendDataSchema>;

// const dataSchema =
