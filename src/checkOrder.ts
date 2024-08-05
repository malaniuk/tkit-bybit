import { getOrder } from './internal';

export const orderDoneStatus = ['PartiallyFilledCanceled', 'Filled'];
export const orderErrorStatus = ['Deactivated', 'Rejected', 'Cancelled'];
export const orderCloseStatus = [...orderDoneStatus, ...orderErrorStatus];

export const checkOrder = async (id: string) => {
  const order = await getOrder(id);

  if (order && orderErrorStatus.includes(order.orderStatus))
    throw { key: 'check-order-error', obj: { order } };

  if (order && orderDoneStatus.includes(order.orderStatus)) {
    return order;
  }
};
