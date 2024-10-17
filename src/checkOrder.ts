import { getOrder } from './internal';
import { validateOrder } from './validateOrder';

export const checkOrder = async (id: string, symbol?: string) =>
  validateOrder(await getOrder(id, symbol));
