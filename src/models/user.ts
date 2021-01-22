import { Redeem } from './redeem';

export interface User {
  id: string;
  name: string;
  points: number;
  redeemHistory: Redeem[];
  createDate: Date;
}
