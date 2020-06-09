<template>
  <div class="flex flex-col min-h-screen">
    <the-header></the-header>
    <the-subheader title="Electronics"></the-subheader>
    <div class="container mx-auto px-4 mb-8 md:px-12">
      <product-filter v-bind:renderFilters="true"></product-filter>
      <div class="border-b mt-6"></div>
    </div>
    <div class="container mx-auto px-4 md:px-12">
      <div class="flex flex-wrap -mx-1 lg:-mx-4">
        <product-card 
          v-for="(product, index) in this.productsList"
          v-bind:key="index"
          v-bind:product="product"
        ></product-card>
      </div>
    </div>
    <div class="container mx-auto px-4 mb-20 md:px-12">
      <product-filter></product-filter>
      <div class="border-b mt-6"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import TheHeader from '@/layouts/the-header.vue'
import TheSubheader from '@/layouts/the-subheader.vue'
import ProductFilter from '@/components/product/product-filter.vue'
import ProductCard from '@/components/product/product-card.vue'
import { Product } from '@/models/product'
import { getModule } from 'vuex-module-decorators'
import ProductModule from '@/store/modules/product-module'

@Component({
  components: {
    'the-header' : TheHeader,
    'the-subheader' : TheSubheader,
    'product-filter' : ProductFilter,
    'product-card' : ProductCard
  }
})
export default class ProductList extends Vue {

  async mounted() {
    const productModule = getModule(ProductModule);
    await productModule.findAll();
  }

  get productsList(): Product[] {
    const productModule = getModule(ProductModule);
    return productModule.products;
  }

}
</script>
