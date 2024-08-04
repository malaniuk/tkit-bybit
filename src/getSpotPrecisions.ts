import Decimal from 'decimal.js';
import * as lo from 'lodash';

import { parseList, rest } from './internal';

export const getSpotPrecisions = async () => {
  const query = rest.getInstrumentsInfo({ category: 'spot' });
  const list = await parseList('get-instruments-bybit', query);

  return lo.fromPairs(
    list.map((item) => {
      const price = new Decimal(item.priceFilter.tickSize);
      const qty = new Decimal(item.lotSizeFilter.basePrecision);

      return [item.symbol, { price, qty }];
    }),
  );
};
