import Decimal from 'decimal.js';

import { parseList, rest } from './internal';

export const getFundings = async (coin: string) => {
  const query = rest.getTickers({ category: 'linear' });

  return Object.fromEntries(
    (await parseList('get-fundings-bybit', query))
      .filter((item) => item.symbol.endsWith(coin))
      .map((item) => [item.symbol, new Decimal(item.fundingRate)]),
  );
};
