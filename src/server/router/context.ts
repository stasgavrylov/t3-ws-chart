// src/server/router/context.ts
import * as trpc from '@trpc/server';
import ws from 'ws';
import * as trpcNext from '@trpc/server/adapters/next';
import { NodeHTTPCreateContextFnOptions } from '@trpc/server/dist/declarations/src/adapters/node-http';
import { EventEmitter } from 'node:events';
import { IncomingMessage } from 'http';

const ee = new EventEmitter();

export const createContext = async (
  opts:
    | trpcNext.CreateNextContextOptions
    | NodeHTTPCreateContextFnOptions<IncomingMessage, ws>
) => {
  if (!opts) return {};

  const { req, res } = opts;

  return { req, res, ee };
};

type Context = trpc.inferAsyncReturnType<typeof createContext>;

export const createRouter = () => trpc.router<Context>();
