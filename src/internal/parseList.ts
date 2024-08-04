import { APIResponseV3WithTime } from 'bybit-api';

type TList<T> = APIResponseV3WithTime<{ list: T[] }>;

export const parseList = async <T>(key: string, query: Promise<TList<T>>) => {
  const resp = await query;

  if (resp.retCode !== 0) {
    throw { key, obj: resp };
  }

  if (resp.result.list && resp.result.list.length > 0) {
    throw { key, obj: resp };
  }

  return resp.result.list;
};
