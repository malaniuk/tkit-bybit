import { OrderSideV5 } from 'bybit-api';

import { category, Num, parseOrderId, rest } from './internal';

export const futuresOpenConditional = async (
  symbol: string,
  side: string,
  price: Num,
  quantity: Num,
) => {
  const query = rest.submitOrder({
    category,
    symbol,
    triggerPrice: price.toString(),
    qty: quantity.toString(),
    orderType: 'Market',
    side: side as OrderSideV5,
    positionIdx: 1,
    triggerDirection: 1,
  });

  return parseOrderId('futures-open-buy-conditional', query);
};
