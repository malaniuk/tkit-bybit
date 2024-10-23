import { OrderSideV5 } from 'bybit-api';
import { v4 as uuidv4 } from 'uuid';

import { category, Num, parseList, parseOrderId, rest } from './internal';
import { orderOpenStatus } from './validateOrder';

const futuresLimit = async (
  symbol: string,
  side: string,
  price: Num,
  qty: Num,
) => {
  const orderLinkId = uuidv4();

  try {
    return parseOrderId(
      'future-open-buy-limit',
      rest.submitOrder({
        category,
        symbol,
        orderLinkId,
        price: price.toString(),
        qty: qty.toString(),
        orderType: 'Limit',
        side: side as OrderSideV5,
        positionIdx: side === 'Buy' ? 1 : 2,
        triggerDirection: side === 'Buy' ? 1 : 2,
      }),
    );
  } catch (e) {
    const query = rest.getActiveOrders({ category, orderLinkId, symbol });
    const list = await parseList('get-order-bybit', query);
    if (!list[0]) {
      throw e;
    }

    if (!orderOpenStatus.includes(list[0].orderStatus)) {
      throw e;
    }

    return list[0].orderId;
  }
};

export { futuresLimit };
