import { category, rest } from './internal';

export const getActiveOrders = async (settleCoin?: string) => {
  const resp = await rest.getActiveOrders({ category, settleCoin });
  if (resp.retCode !== 0) {
    throw { key: 'get-order-bybit', obj: resp };
  }

  return resp.result.list;
};
