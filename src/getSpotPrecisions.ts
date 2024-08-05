import Decimal from 'decimal.js';

import { parseList, rest } from './internal';

export type TPrecision = {
  price: Decimal;
  qty: Decimal;
};

export const getSpotPrecisions = async () => {
  const query = rest.getInstrumentsInfo({ category: 'spot' });
  const list = await parseList('get-instruments-bybit', query);

  return Object.fromEntries(
    list.map((item) => {
      const price = new Decimal(item.priceFilter.tickSize);
      const qty = new Decimal(item.lotSizeFilter.basePrecision);

      return [item.symbol, { price, qty } as TPrecision];
    }),
  );
};
