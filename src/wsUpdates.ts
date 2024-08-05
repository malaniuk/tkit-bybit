import Decimal from 'decimal.js';

import { socket } from './internal';

export const wsUpdates = (cb: (data: any) => void) =>
  socket.on('update', ({ topic, data }) => {
    if (topic.startsWith('tickers.')) {
      if (!data.lastPrice) {
        return;
      }

      const price = new Decimal(data.lastPrice);
      cb({ topic, data: { price } });

      return;
    }

    cb({ topic, data });
  });
