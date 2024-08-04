import { Num } from './internal';
import { orderOpenBuyMarket } from './orderOpenBuyMarket';
import { waitOrderComplete } from './waitOrderComplete';

export const buyMarket = async (symbol: string, quantity: Num) => {
  const orderId = await orderOpenBuyMarket(symbol, quantity);

  return waitOrderComplete(orderId);
};
