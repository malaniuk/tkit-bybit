import { OrderSideV5 } from 'bybit-api';

import { category, Num, parseOrderId, rest } from './internal';

const openConditional = (symbol: string, side: string, price: Num, qty: Num) =>
  parseOrderId(
    'open-conditional-bybit',
    rest.submitOrder({
      category,
      symbol,
      triggerPrice: price.toString(),
      qty: qty.toString(),
      orderType: 'Market',
      side: side as OrderSideV5,
    }),
  );

export { openConditional };
