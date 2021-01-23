import { Image } from './image';

export interface Product {
  _id: string;
  name: string;
  cost: number;
  category: string;
  img: Image;
}
