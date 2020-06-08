<template>
  <div class="flex flex-wrap md:flex-no-wrap items-center justify-between mx-auto mt-16">
    <div class="flex items-center">
      <span class="text-primary-text text-2xl font-normal tracking-tight mr-3">16 of 32 products</span>
      <div class="border-l mx-6 h-12"></div>
      <span class="text-secondary-text text-2xl font-normal tracking-tight mr-3">Sort by:</span>
      <product-filter-button label="Most recent"></product-filter-button>
      <product-filter-button label="Lowest price"></product-filter-button>
      <product-filter-button label="Highest price"></product-filter-button>
    </div>
    <div class="flex items-center">
      <button class="mr-3">
        <img src="arrow-left.svg"/>
      </button>
      <button>
        <img src="arrow-right.svg"/>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ProductFilterButton from '~/components/product/product-filter-button.vue'

export default Vue.extend({
  components: {
    'product-filter-button': ProductFilterButton
  }
})
</script>