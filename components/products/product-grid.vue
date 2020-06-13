<template>
  <div>
    <app-layout-grid :entityName="'products'" :page="this.page">
      <template slot="sorting">
        <product-grid-sorting :page="this.page"></product-grid-sorting>
      </template>
      <template slot="content">
        <product-card
          slot:content
          v-for="(product, index) in this.page.data"
          v-bind:key="index"
          v-bind:product="product"
        ></product-card>
      </template>
    </app-layout-grid>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch, Prop } from 'vue-property-decorator'
import AppLayoutGrid from '@/components/base/app-layout-grid.vue'
import AppLayoutGridPagination from '@/components/base/app-layout-grid-pagination.vue'
import ProductGridSorting from '~/components/products/product-grid-sorting.vue'
import ProductCard from '@/components/products/product-card.vue'
import { Product } from '@/models/product'
import { getModule } from 'vuex-module-decorators'
import ProductModule from '@/store/modules/product-module'
import { Page } from '../../models/page'

@Component({
  components: {
    'app-layout-grid': AppLayoutGrid,
    'product-card': ProductCard,
    'product-grid-sorting': ProductGridSorting
  }
})
export default class ProductGrid extends Vue {

  @Prop({ type: Number, required: true }) readonly sizePerPage!: number;
  productModule = getModule(ProductModule);

  get page(): Page<Product> {
    return this.productModule.products;
  }

  @Watch('$route', { immediate: true, deep: true })
  async onUrlChange(newVal: any) {

    let page: number = newVal.query.page ? Number(newVal.query.page) : 1;
    let size: number = newVal.query.size ? Number(newVal.query.size) : this.sizePerPage;
    let sortField: string = newVal.query.sortField ? newVal.query.sortField.toString() : undefined;
    let sortDirection: string = newVal.query.sortDirection ? newVal.query.sortDirection.toString() : undefined;

    this.productModule.findAllPaged({page: page, size: size, sortField: sortField, sortDirection: sortDirection});
  }

}
</script>
