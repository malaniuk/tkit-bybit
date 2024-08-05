import log from '@malaniuk/tkit-logger';
import {
  DefaultLogger,
  WebsocketClient,
  WSClientConfigurableOptions,
} from 'bybit-api';

const customLogger = {
  ...DefaultLogger,
  silly: () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
  debug: () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
  notice: () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
  info: () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
};

const key = process.env.BB_API_KEY;
const secret = process.env.BB_API_SECRET;

const wsOpts: WSClientConfigurableOptions = { key, secret, market: 'v5' };
const socket = new WebsocketClient(wsOpts, customLogger);

socket.on('open', () => log.info('socket-connected'));
socket.on('reconnect', () => log.info({}, 'socket-reconnecting'));
socket.on('reconnected', () => log.info({}, 'socket-reconnected'));
socket.on('close', () => log.info({}, 'socket-closed'));
socket.on('error', (error) => log.error({ error }, 'socket-error'));

export { socket };
