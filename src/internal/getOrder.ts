import { category } from './config';
import { parseList } from './parseList';
import { rest } from './rest';

export const getOrder = async (orderId: string) => {
  const query = rest.getActiveOrders({ category, orderId });
  const list = await parseList('get-order-bybit', query);

  return list[0];
};
