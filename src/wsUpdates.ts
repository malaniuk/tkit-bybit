import Decimal from 'decimal.js';

import { socket } from './internal';

export const wsUpdates = (cb: (data: any) => void) =>
  socket.on('update', ({ topic, data }) => {
    if (topic.startsWith('tickers.')) {
      if (!data.lastPrice) {
        return;
      }

      const price = new Decimal(data.lastPrice);
      const symbol = data.symbol;

      return cb({ topic, data: { price, symbol } });
    }

    return cb({ topic, data });
  });
