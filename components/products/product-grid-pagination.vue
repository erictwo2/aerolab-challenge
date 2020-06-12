<template>
  <div class="flex flex-wrap md:flex-no-wrap items-center justify-between mx-auto mt-16">
    <div class="flex flex-no-wrap items-center">
      <span class="text-primary-font text-2xl font-normal tracking-tight mr-3">{{ page.size * page.currentPage }} of {{ page.total }} products</span>
      <div v-if="renderFilters" class="flex flex-no-wrap items-center">
        <div class="border-l w-1 mx-6 h-12"></div>
        <span class="text-secondary-font text-2xl font-normal tracking-tight mr-3">Sort by:</span>
        <product-sort-button label="Lowest price"></product-sort-button>
        <product-sort-button label="Highest price"></product-sort-button>
      </div>
    </div>
    <div class="flex items-center">
      <a v-if="page.prevPage" v-bind:href="page.prevPage" class="cursor-pointer">
        <img src="arrow-left.svg"/>
      </a>
      <a v-if="page.nextPage" v-bind:href="page.nextPage" class="ml-3 cursor-pointer">
        <img src="arrow-right.svg"/>
      </a>
    </div>
  </div>
</template>

<script lang="ts">

import ProductSortButton from '~/components/products/product-sort-button.vue'
import { Vue, Component, Prop } from 'vue-property-decorator'
import { Product } from '@/models/product'
import { Page } from '../../models/page'

@Component({
  components: {
    'product-sort-button': ProductSortButton
  }
})
export default class ProductGridPagination extends Vue {

  @Prop({ type: Object, required: true }) readonly page!: Page<any>
  @Prop({ type: Boolean, default: false }) readonly renderFilters!: Boolean

  data() {
    return {
      hover: false,
    };
  }

}
</script>