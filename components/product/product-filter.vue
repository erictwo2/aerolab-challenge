<template>
  <header class="bg-white">
    <div class="flex flex-wrap md:flex-no-wrap items-center justify-between mx-auto pt-5 pb-5 mt-16 ml-32 mr-32">
      <div class="flex items-center">
        <span class="text-2xl font-normal tracking-tight mr-3">16 of 32 products | Sort by:</span> 
        <product-filter-button label="Most recent"></product-filter-button>
        <product-filter-button label="Lowest price"></product-filter-button>
        <product-filter-button label="Highest price"></product-filter-button>
      </div>
      <div class="flex items-center">
        <img src="arrow-left.svg" class="mr-3"></img>
        <img src="arrow-right.svg"></img>
      </div>
    </div>
  </header>
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