import Decimal from 'decimal.js';

import { accountType, parseList, rest } from './internal';

const key = 'bybit-get-balance';

export const getUsdtBalance = async () => {
  const query = rest.getWalletBalance({ accountType, coin: 'USDT' });
  const list = await parseList(key, query);

  if (list && list[0] && list[0].coin && list[0].coin[0]) {
    return new Decimal(list[0].coin[0].walletBalance);
  }

  throw { key, obj: list };
};
