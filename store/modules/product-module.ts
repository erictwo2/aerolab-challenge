import { VuexModule, Module, Mutation, Action } from "vuex-module-decorators";

import { Product } from "@/models/product";
import { ProductService } from "@/services/product-service";
import { store } from "..";
import { Page } from "~/models/page";

@Module({ name: 'productModule', store: store, dynamic: true})
export default class ProductModule extends VuexModule {

  products: Page<Product> = {
    nextPage: null,
    prevPage: null,
    currentPage: 0,
    size: 0,
    total: 0,
    sortField: null,
    sortDirection: null,
    data: []
  };
  service: ProductService = new ProductService();

  @Action({commit: 'setProducts'})
  async findAllPaged(options: {page: number, size: number, sortField: string, sortDirection: string}): Promise<Page<Product>> {
    return await this.service.findAllPaged(options);
  }

  @Mutation
  public setProducts(products: Page<Product>) {
    this.products = products;
  }

}
