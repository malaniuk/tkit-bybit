import { category, Num, parseOrderId, rest } from './internal';

export const orderOpenBuyMarket = (symbol: string, qty: Num) =>
  parseOrderId(
    'buy-market-bybit',
    rest.submitOrder({
      category,
      orderType: 'Market',
      qty: qty.toString(),
      side: 'Buy',
      symbol,
    }),
  );
