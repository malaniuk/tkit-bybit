import Decimal from 'decimal.js';
import * as lo from 'lodash';

import { parseList, rest } from './internal';

export const getSpotPrices = async (coin: string) =>
  lo.fromPairs(
    (await parseList('get-prices-bybit', rest.getTickers({ category: 'spot' })))
      .filter((item) => item.symbol.endsWith(coin))
      .map((item) => [item.symbol, new Decimal(item.lastPrice)]),
  );
