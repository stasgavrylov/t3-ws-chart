import { WebSocketServer } from 'ws';
import { applyWSSHandler } from '@trpc/server/adapters/ws';
import { appRouter } from './router';
import { createContext } from './router/context';

const PORT = 3001;
const wss = new WebSocketServer({
  port: PORT,
});

const handler = applyWSSHandler({ wss, createContext, router: appRouter });

wss.on('connection', () => {
  console.log(`++ ws connection ${wss.clients.size}`);

  wss.on('close', () => {
    console.log(`-- ws connection ${wss.clients.size}`);
  });
});

console.log(`WS server started on port ${PORT}`);

process.on('SIGTERM', () => {
  console.log('SIGTERM');

  handler.broadcastReconnectNotification();

  wss.close();
});
