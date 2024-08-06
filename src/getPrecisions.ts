import Decimal from 'decimal.js';

import { category, parseList, rest } from './internal';

export type TPrecision = {
  price: Decimal;
  qty: Decimal;
};

const getSpotPrecisions = async () => {
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

const getLinearPrecision = async () => {
  const query = rest.getInstrumentsInfo({ category: 'linear' });
  const list = await parseList('get-instruments-bybit', query);

  return Object.fromEntries(
    list.map((item) => {
      const price = new Decimal(item.priceFilter.tickSize);
      const qty = new Decimal(item.lotSizeFilter.qtyStep);

      return [item.symbol, { price, qty } as TPrecision];
    }),
  );
};

export const getPrecisions = async () => {
  switch (category) {
  case 'spot':
    return getSpotPrecisions();
  case 'linear':
    return getLinearPrecision();
  default:
    throw { key: 'category is missing in process.env', obj: {} };
  }
};
