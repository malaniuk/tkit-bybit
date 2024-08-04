import { category, Num, parseOrderId, rest } from './internal';

const orderType = 'Market';
const side = 'Buy';

export const orderOpenBuyMarket = async (symbol: string, quantity: Num) => {
  const qty = quantity.toString();
  const query = rest.submitOrder({ category, orderType, qty, side, symbol });

  return parseOrderId('buy-market-bybit', query);
};
