<template>
  <div class="flex flex-no-wrap items-center">
    <div class="border-l w-1 mx-6 h-12"></div>
    <span class="text-secondary-font text-2xl font-normal tracking-tight mr-3">Sort by:</span>
    <product-sort-button label="Lowest price"></product-sort-button>
    <product-sort-button label="Highest price"></product-sort-button>
  </div>
</template>

<script lang="ts">

import ProductSortButton from '~/components/products/product-sort-button.vue'
import { Vue, Component } from 'vue-property-decorator'

@Component({
  components: {
    'product-sort-button': ProductSortButton
  }
})
export default class ProductGridSorting extends Vue { }
</script>