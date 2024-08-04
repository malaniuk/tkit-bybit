import { getOrder } from './internal';

const doneStatus = ['PartiallyFilledCanceled', 'Filled'];
const errorStatus = ['Deactivated', 'Rejected', 'Cancelled'];

export const checkOrder = async (id: string) => {
  const order = await getOrder(id);

  if (order && errorStatus.includes(order.orderStatus))
    throw { key: 'check-order-error', obj: { order } };

  if (order && doneStatus.includes(order.orderStatus)) {
    return order;
  }
};
