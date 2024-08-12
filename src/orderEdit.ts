import { category, Num, parseOrderId, rest } from './internal';

export const orderEdit = (id: string, symbol: string, price: Num) =>
  parseOrderId(
    'open-edit-bybit',
    rest.amendOrder({
      category,
      symbol,
      orderId: id,
      triggerPrice: price.toString(),
    }),
  );
