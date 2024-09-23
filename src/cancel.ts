import { category, parseOrderId, rest } from './internal';

export const cancel = (symbol: string, orderId: string) =>
  parseOrderId('cancel', rest.cancelOrder({ category, symbol, orderId }));
