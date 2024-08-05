import { socket } from './internal';

export const wsUpdates = (cb: (data: any) => void) => socket.on('update', cb);
