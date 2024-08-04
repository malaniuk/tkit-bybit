import { APIResponseV3WithTime, OrderResultV5 } from 'bybit-api';

type TOrder = APIResponseV3WithTime<OrderResultV5>;

export const parseOrderId = async (key: string, query: Promise<TOrder>) => {
  const resp = await query;

  if (resp.retCode !== 0) {
    throw { key, obj: resp };
  }

  return resp.result.orderId;
};
