import axios, { AxiosResponse } from 'axios';
import { Product } from '../models/product';
import { Page } from '~/models/page';

export class ProductService {

  endpoint: string = 'https://private-anon-7fa323019d-aerolabchallenge.apiary-proxy.com/products';

  async findAll(): Promise<Product[]> {
    const response: AxiosResponse<Product[]> = await axios.get(this.endpoint);
    return response.data;
  }

  async findAllPaged(page?: number, size?: number, sortField?: string, sortOrder?: string): Promise<Page<Product>> {
    const response: AxiosResponse<Product[]> = await axios.get(this.endpoint);
    return this.paginate(response.data, page, size, sortField, sortOrder);
  }

  paginate(
    collection: Product[], 
    currentPage: number = 1, 
    size: number = 16, 
    sortField: string | undefined, 
    sortOrder: string | undefined)
    : Page<Product> 
  {
    console.log(currentPage);
    const offset = (currentPage - 1) * size;
    const data = collection.slice(offset, offset + size);
    const totalPages = Math.ceil(collection.length / size);

    const page: Page<Product> = {
      prevPage: currentPage > 1 ? '?page=' + (currentPage - 1) + '&size=' + size : null,
      nextPage: currentPage < totalPages ? '?page=' + (currentPage + 1) + '&size=' + size : null,
      currentPage: currentPage,
      size: size,
      total: collection.length,
      data: data
    }

    return page;
  }

}
