import { OrderSideV5 } from 'bybit-api';

import { category, Num, parseOrderId, rest } from './internal';

const futuresOpen = (symbol: string, side: string, price: Num, qty: Num) =>
  parseOrderId(
    'future-open-buy-conditional',
    rest.submitOrder({
      category,
      symbol,
      triggerPrice: price.toString(),
      qty: qty.toString(),
      orderType: 'Market',
      side: side as OrderSideV5,
      positionIdx: side === 'Buy' ? 1 : 2,
      triggerDirection: side === 'Buy' ? 1 : 2,
    }),
  );

export { futuresOpen };
