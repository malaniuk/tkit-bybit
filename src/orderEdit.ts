import { category, Num, parseOrderId, rest } from './internal';

export const orderEdit = async (
  orderId: string,
  symbol: string,
  newOrderPrice: Num,
) => {
  const triggerPrice = newOrderPrice.toString();
  const query = rest.amendOrder({ category, symbol, orderId, triggerPrice });

  return parseOrderId('open-edit-bybit', query);
};
