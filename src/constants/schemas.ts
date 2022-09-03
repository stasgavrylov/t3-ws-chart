import z from 'zod';

export const sendDataSchema = z.object({
  value: z.number(),
});

export const dataRequestSchema = z.object({
  sendData: z.boolean(),
  amount: z.number(),
});

export type SendDataT = z.TypeOf<typeof dataRequestSchema>;
