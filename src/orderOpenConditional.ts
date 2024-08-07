import { OrderSideV5 } from 'bybit-api';

import { category, Num, parseOrderId, rest } from './internal';

export const orderOpenConditional = async (
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
    orderFilter: 'StopOrder',
    marketUnit: 'quoteCoin',
    side: side as OrderSideV5,
  });

  return parseOrderId('open-conditional-bybit', query);
};
