import { category, parseList, rest } from './internal';

export const getActiveOrders = async (settleCoin?: string) =>
  parseList(
    'get-order-bybit',
    rest.getActiveOrders({
      category,
      settleCoin,
    }),
  );
