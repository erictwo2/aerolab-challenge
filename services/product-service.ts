import axios, { AxiosResponse } from 'axios';
import { Product } from '../models/product';

export class ProductService {

  endpoint: string = 'https://private-anon-7fa323019d-aerolabchallenge.apiary-proxy.com/products';

  async findAll(): Promise<Product[]> {
    const response: AxiosResponse<Product[]> = await axios.get(this.endpoint);
    return response.data;
  }

}
