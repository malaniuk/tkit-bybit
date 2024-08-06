import Decimal from 'decimal.js';

import { category, parseList, rest } from './internal';

const getSpotPrices = async (coin: string) => {
  const query = rest.getTickers({ category: 'spot' });

  return Object.fromEntries(
    (await parseList('get-prices-bybit', query))
      .filter((item) => item.symbol.endsWith(coin))
      .map((item) => [item.symbol, new Decimal(item.lastPrice)]),
  );
};

const getLinearPrices = async (coin: string) => {
  const query = rest.getTickers({ category: 'linear' });

  return Object.fromEntries(
    (await parseList('get-prices-bybit', query))
      .filter((item) => item.symbol.endsWith(coin))
      .map((item) => [item.symbol, new Decimal(item.lastPrice)]),
  );
};

export const getPrices = async (coin: string) => {
  switch (category) {
  case 'spot':
    return getSpotPrices(coin);
  case 'linear':
    return getLinearPrices(coin);
  default:
    throw { key: 'category is missing in process.env', obj: {} };
  }
};
