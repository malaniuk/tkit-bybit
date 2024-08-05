import { category, socket } from './internal';

export const wsSubscribePrices = (symbol: string) =>
  socket.subscribeV5([`tickers.${symbol}`], category);

export const wsUnsubscribePrices = (symbol: string) =>
  socket.unsubscribeV5([`tickers.${symbol}`], category);
