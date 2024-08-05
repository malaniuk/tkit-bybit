import Decimal from 'decimal.js';

import { parseList, rest } from './internal';

export const getSpotPrices = async (coin: string) =>
  Object.fromEntries(
    (await parseList('get-prices-bybit', rest.getTickers({ category: 'spot' })))
      .filter((item) => item.symbol.endsWith(coin))
      .map((item) => [item.symbol, new Decimal(item.lastPrice)]),
  );
