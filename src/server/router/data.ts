import { createRouter } from './context';
import { z } from 'zod';
import {
  sendDataSchema,
  dataRequestSchema,
  SendDataT,
} from '../../constants/schemas';
import * as trpc from '@trpc/server';
import { Events } from '../../constants/events';
import { getRandomRange } from '../../utils/data-generator';

export const dataRouter = createRouter()
  .mutation('send-data', {
    input: dataRequestSchema,
    resolve({ ctx, input }) {
      const ITERATIONS = input.amount ?? 100;
      const rangeGenerator = getRandomRange([1, 10], ITERATIONS / 100);
      let counter = 0;

      const startTime = Date.now();
      const interval = setInterval(() => {
        if (counter > ITERATIONS) {
          const endTime = Date.now();
          ctx.ee?.emit(Events.SEND_DATA, Infinity);
          clearInterval(interval);
          return;
        }

        counter++;
        ctx.ee?.emit(Events.SEND_DATA, rangeGenerator.next().value);
      }, Math.round(1000 / 60)); // 60 FPS smoothness
    },
  })
  .subscription('onSendData', {
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
