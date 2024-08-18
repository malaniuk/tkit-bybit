import { category, parseList, rest } from './internal';

export const getActiveOrders = async (symbol?: string) =>
  parseList(
    'get-order-bybit',
    rest.getActiveOrders({
      category,
      symbol,
    }),
  );
