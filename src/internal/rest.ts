import { RestClientV5 } from 'bybit-api';

const key = process.env.BB_API_KEY;
const secret = process.env.BB_API_SECRET;
const testnet = process.env.BB_TESTNET === 'true';

export const rest = new RestClientV5({
  key,
  secret,
  testnet,
  demoTrading: testnet,
});
