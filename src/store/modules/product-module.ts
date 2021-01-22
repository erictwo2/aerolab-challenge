import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators';

import { Product } from '@/models/product';
import { ProductService } from '@/services/product-service';
import { store } from '..';
import { Page } from '@/models/page';

@Module({ name: 'productModule', store: store, dynamic: true })
export default class ProductModule extends VuexModule {
  page: Page<Product> | null = null;
  private service: ProductService = new ProductService();

  @Action({ commit: 'setPage' })
  async findAllPaged(options: {
    page: number;
    size: number;
    sortField: string;
    sortDirection: string;
  }): Promise<Page<Product>> {
    return await this.service.findAllPaged(options);
  }

  @Mutation
  public setPage(page: Page<Product>) {
    if (!this.page) {
      this.page = page;
    } else {
      this.page.data = page.data;
      this.page.total = page.total;
      this.page.totalPages = page.totalPages;
    }
  }
}
