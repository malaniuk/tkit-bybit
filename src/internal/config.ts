import { AccountTypeV5, CategoryV5 } from 'bybit-api';

export const category = process.env.BB_CATEGORY as CategoryV5;
export const accountType = process.env.BB_ACCOUNT_TYPE as AccountTypeV5;
