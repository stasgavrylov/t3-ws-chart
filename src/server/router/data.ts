import { createRouter } from "./context";
import { z } from "zod";
import {
  sendDataSchema,
  dataRequestSchema,
  SendDataT,
} from "../../constants/schemas";
import * as trpc from "@trpc/server";
import { Events } from "../../constants/events";

export const dataRouter = createRouter()
  .mutation("send-data", {
    input: dataRequestSchema,
    resolve({ ctx, input }) {
      const data = { value: 1 };

      ctx.ee?.emit(Events.SEND_DATA, data);

      return data;
    },
  })
  .subscription("onSendData", {
    resolve({ ctx, input }) {
      return new trpc.Subscription((emit) => {
        function onMessage(data: SendDataT) {
          emit.data(data);
        }

        ctx.ee?.on(Events.SEND_DATA, onMessage);

        return () => {
          ctx.ee?.off(Events.SEND_DATA, onMessage);
        };
      });
    },
  });
