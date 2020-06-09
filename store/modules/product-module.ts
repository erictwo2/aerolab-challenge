import { VuexModule, Module, Mutation, Action } from "vuex-module-decorators";

import { Product } from "@/middleware/models/product";
import { ProductService } from "@/middleware/services/product-service";
import { store } from "..";

@Module({ name: 'productModule', store: store, dynamic: true})
export default class ProductModule extends VuexModule {

  products: Product[] = [];
  service: ProductService = new ProductService();

  @Action({commit: 'setProducts'})
  async findAll(): Promise<Product[]> {
    return await this.service.findAll();
  }

  @Mutation
  public setProducts(p: Product[]) {
    this.products = p;
  }

}
