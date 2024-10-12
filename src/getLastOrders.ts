import { category, rest } from './internal';

export const getLastOrders = async (symbol?: string) => {
  const resp = await rest.getActiveOrders({ category, symbol, openOnly: 2 });
  if (resp.retCode !== 0) {
    throw { key: 'get-order-bybit', obj: resp };
  }

  return resp.result.list.sort((a, b) => {
    return +b.updatedTime - +a.updatedTime;
  });
};
