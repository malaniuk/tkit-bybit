import { category } from './config';
import { parseList } from './parseList';
import { rest } from './rest';

export const getOrder = async (orderId: string, symbol?: string) => {
  const query = rest.getActiveOrders({ category, orderId, symbol });
  const list = await parseList('get-order-bybit', query);

  return list[0];
};
