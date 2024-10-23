import { AccountOrderV5 } from 'bybit-api';

export const orderOpenStatus = [
  'Created',
  'New',
  'Untriggered',
  'Triggered',
  'Active',
];
export const orderDoneStatus = ['PartiallyFilledCanceled', 'Filled'];
export const orderErrorStatus = ['Deactivated', 'Rejected', 'Cancelled'];
export const orderCloseStatus = [...orderDoneStatus, ...orderErrorStatus];

export const validateOrder = (order?: AccountOrderV5) => {
  if (order && orderErrorStatus.includes(order.orderStatus))
    throw { key: 'check-order-error', obj: { order } };

  if (order && orderDoneStatus.includes(order.orderStatus)) {
    return order;
  }

  return null;
};
