<template>
  <div>
    <app-layout-grid-pagination :entityName="'products'" :page="this.productsPaged">
      <product-grid-sorting></product-grid-sorting>
    </app-layout-grid-pagination>
    <app-layout-grid>
      <product-card 
        v-for="(product, index) in this.productsPaged.data"
        v-bind:key="index"
        v-bind:product="product"
      ></product-card>
    </app-layout-grid>
    <app-layout-grid-pagination :entityName="'products'" :page="this.productsPaged"></app-layout-grid-pagination>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
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
    'app-layout-grid-pagination': AppLayoutGridPagination,
    'product-card': ProductCard,
    'product-grid-sorting': ProductGridSorting
  }
})
export default class ProductGrid extends Vue {

  productModule = getModule(ProductModule);

  async mounted() {
    let page: number | undefined = this.$route.query.page ? Number(this.$route.query.page) : undefined;
    let size: number | undefined = this.$route.query.size ? Number(this.$route.query.size) : undefined;
    await this.productModule.findAllPaged(page, size);
  }

  get productsPaged(): Page<Product> {
    return this.productModule.products;
  }

}
</script>
