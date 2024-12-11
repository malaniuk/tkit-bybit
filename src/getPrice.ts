import Decimal from 'decimal.js';
import { first } from 'lodash';

import { category, parseList, rest } from './internal';

const getSpotPrice = async (symbol: string) => {
  const query = rest.getTickers({ category: 'spot', symbol });
  const data = first(await parseList('get-price-bybit', query));
  if (!data || data.symbol !== symbol) {
    throw { key: 'get-price-bybit', obj: data };
  }

  return new Decimal(data.lastPrice);
};

const getLinearPrice = async (symbol: string) => {
  const query = rest.getTickers({ category: 'linear', symbol });

  const data = first(await parseList('get-price-bybit', query));
  if (!data || data.symbol !== symbol) {
    throw { key: 'get-price-bybit', obj: data };
  }

  return new Decimal(data.lastPrice);
};

export const getPrice = async (symbol: string): Promise<Decimal> => {
  switch (category) {
  case 'spot':
    return getSpotPrice(symbol);
  case 'linear':
    return getLinearPrice(symbol);
  default:
    throw { key: 'category is missing in process.env', obj: {} };
  }
};
