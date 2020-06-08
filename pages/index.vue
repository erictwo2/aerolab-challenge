<template>
  <div class="flex flex-col min-h-screen">
    <the-header></the-header>
    <the-subheader title="Electronics"></the-subheader>
    <div class="container mx-auto px-4 mb-10 md:px-12">
      <product-filter></product-filter>
      <div class="border-b mt-6"></div>
    </div>
    <div class="container mx-auto px-4 md:px-12">
      <div class="flex flex-wrap -mx-1 lg:-mx-4">
        <product-card></product-card>
        <product-card></product-card>
        <product-card></product-card>
        <product-card></product-card>
        <product-card></product-card>
        <product-card></product-card>
        <product-card></product-card>
        <product-card></product-card>
        <product-card></product-card>
        <product-card></product-card>
        <product-card></product-card>
        <product-card></product-card>
        <product-card></product-card>
        <product-card></product-card>
        <product-card></product-card>
        <product-card></product-card>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TheHeader from '~/layouts/the-header.vue'
import TheSubheader from '~/layouts/the-subheader.vue'
import ProductFilter from '~/components/product/product-filter.vue'
import ProductCard from '~/components/product/product-card.vue'

export default Vue.extend({
  components: {
    'the-header' : TheHeader,
    'the-subheader' : TheSubheader,
    'product-filter' : ProductFilter,
    'product-card' : ProductCard
  }
})
</script>
