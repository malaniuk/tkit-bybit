import { category, socket } from './internal';

export const wsSubscribeOrders = () => socket.subscribeV5(['order'], category);
