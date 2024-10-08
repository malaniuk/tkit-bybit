import { OrderSideV5 } from 'bybit-api';

import { category, Num, parseOrderId, rest } from './internal';

const futuresLimit = (symbol: string, side: string, price: Num, qty: Num) =>
  parseOrderId(
    'future-open-buy-limit',
    rest.submitOrder({
      category,
      symbol,
      price: price.toString(),
      qty: qty.toString(),
      orderType: 'Limit',
      side: side as OrderSideV5,
      positionIdx: side === 'Buy' ? 1 : 2,
      triggerDirection: side === 'Buy' ? 1 : 2,
    }),
  );

export { futuresLimit };
