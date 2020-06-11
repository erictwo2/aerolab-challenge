<template>
  <div>
    <div class="container mx-auto px-4 mb-8 md:px-12">
      <product-filter v-bind:renderFilters="true" v-bind:page="this.productsPaged"></product-filter>
      <div class="border-b mt-6"></div>
    </div>
    <app-layout-grid>
      <product-card 
        v-for="(product, index) in this.productsPaged.data"
        v-bind:key="index"
        v-bind:product="product"
      ></product-card>
    </app-layout-grid>
    <div class="container mx-auto px-4 mb-20 md:px-12">
      <product-filter v-bind:page="this.productsPaged"></product-filter>
      <div class="border-b mt-6"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import ProductFilter from '@/components/products/product-filter.vue'
import ProductCard from '@/components/products/product-card.vue'
import AppLayoutGrid from '@/components/base/app-layout-grid.vue'
import { Product } from '@/models/product'
import { getModule } from 'vuex-module-decorators'
import ProductModule from '@/store/modules/product-module'
import { Page } from '../../models/page'

@Component({
  components: {
    'product-filter': ProductFilter,
    'product-card': ProductCard,
    'app-layout-grid': AppLayoutGrid,
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
