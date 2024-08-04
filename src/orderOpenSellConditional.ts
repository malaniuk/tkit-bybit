import { category, Num, parseOrderId, rest } from './internal';

export const orderOpenSellConditional = async (
  symbol: string,
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
    marketUnit: 'baseCoin',
    side: 'Sell',
  });

  return parseOrderId('open-conditional-bybit', query);
};
