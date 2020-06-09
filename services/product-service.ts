import axios, { AxiosResponse } from 'axios';
import { Product } from '../models/product';

export class ProductService {

  endpoint: string = 'https://private-anon-7fa323019d-aerolabchallenge.apiary-proxy.com/products';

  async findAll(): Promise<Product[]> {
    const response: AxiosResponse<Product[]> = await axios.get(
      this.endpoint,
      {
          headers: {
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRhYWMzMjYwMmY2ODAwNmM4ZjczZmMiLCJpYXQiOjE1OTEzODkyMzR9.sqBmyZKGr2gwUWwb2mSv7fdQAmKeeNZ8zuQRnKKFgMk'
          }
      }
    );
    return response.data;
  }

}
