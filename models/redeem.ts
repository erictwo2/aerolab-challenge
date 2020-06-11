import { Image } from "./image"

export interface Redeem {
  _id: string;
  productId: string;
  name: string;
  cost: number;
  category: string;
  img: Image;
  createDate: Date;
}
