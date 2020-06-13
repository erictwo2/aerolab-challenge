import axios, { AxiosResponse } from 'axios';
import { Product } from '../models/product';
import { Page } from '~/models/page';

export class ProductService {

  endpoint: string = 'https://private-anon-7fa323019d-aerolabchallenge.apiary-proxy.com/products';

  async findAll(): Promise<Product[]> {
    const response: AxiosResponse<Product[]> = await axios.get(this.endpoint);
    return response.data;
  }

  async findAllPaged(options: {page: number, size: number, sortField: string, sortDirection: string}): Promise<Page<Product>> {

    const response: AxiosResponse<Product[]> = await axios.get(this.endpoint);
    let collection: Product[] = response.data;

    let sortingUrl = null;
    if (options && options.sortField) {
      let sort = options && options.sortDirection && options.sortDirection == 'DESC' ? -1 : 1;
      let key: keyof Product = options.sortField;
      collection = collection.sort((a, b) => (a[key] > b[key]) ? sort : sort * -1);

      sortingUrl = '&sortField=' + key + '&sortDirection=' + (sort == -1 ? 'DESC' : 'ASC');
    }

    const offset = (options.page - 1) * options.size;
    const data = collection.slice(offset, offset + options.size);
    const totalPages = Math.ceil(collection.length / options.size);

    let prevPageUrl = null;
    if (options.page > 1) {
      prevPageUrl = '?page=' + (options.page - 1) + '&size=' + options.size;
      prevPageUrl += sortingUrl ? sortingUrl : '';
    }

    let nextPageUrl = null;
    if (options.page < totalPages) {
      nextPageUrl =  '?page=' + (options.page + 1) + '&size=' + options.size;
      nextPageUrl += sortingUrl ? sortingUrl : '';
    }

    const page: Page<Product> = {
      prevPage: prevPageUrl,
      nextPage: nextPageUrl,
      currentPage: options.page,
      size: options.size,
      total: collection.length,
      sortField: options.sortField,
      sortDirection: options.sortDirection,
      data: data
    }

    return page;
  }

}
