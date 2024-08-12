import { OrderSideV5 } from 'bybit-api';

import { category, Num, parseOrderId, rest } from './internal';

export const futuresClose = (symbol: string, side: string, price: Num) =>
  parseOrderId(
    'future-close-buy-conditional',
    rest.submitOrder({
      category,
      symbol,
      triggerPrice: price.toString(),
      orderType: 'Market',
      side: side as OrderSideV5,
      qty: '0',
      positionIdx: side === 'Buy' ? 2 : 1,
      triggerDirection: side === 'Buy' ? 1 : 2,
      reduceOnly: true,
      closeOnTrigger: true,
    }),
  );
