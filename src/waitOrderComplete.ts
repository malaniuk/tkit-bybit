import { s, sleep } from '@malaniuk/tkit-date';

import { checkOrder } from './checkOrder';

export const waitOrderComplete = async (orderId: string) => {
  let retry = 0;

  while (retry++ <= 5) {
    const order = await checkOrder(orderId);
    if (order) {
      return order;
    }

    await sleep(s(1));
  }

  throw { key: 'wait-order-error', obj: { orderId } };
};
