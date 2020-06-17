import axios, { AxiosResponse } from 'axios';
import { Product } from '../models/product';
import { Page } from '~/models/page';

export class ProductService {

  async findAllPaged(options: {page: number, size: number, sortField: string, sortDirection: string}): Promise<Page<Product>> {

    const response: AxiosResponse<Product[]> = await axios.get(process.env.baseUrl + '/products');
    let collection: Product[] = response.data;

    if (options && options.sortField) {
      let sort = options && options.sortDirection && options.sortDirection == 'DESC' ? -1 : 1;
      let key: keyof Product = options.sortField;
      collection = collection.sort((a, b) => (a[key] > b[key]) ? sort : sort * -1);
    }

    const offset = (options.page - 1) * options.size;
    const data = collection.slice(offset, offset + options.size);
    const totalPages = Math.ceil(collection.length / options.size);

    const page: Page<Product> = {
      currentPage: options.page,
      totalPages: totalPages,
      size: options.size,
      total: collection.length,
      sortField: options.sortField,
      sortDirection: options.sortDirection,
      data: data
    }

    return page;
  }

}
