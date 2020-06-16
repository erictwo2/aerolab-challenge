<template>
  <div>
    <app-layout-grid :entityName="'products'" :page="page">
      <template v-if="page" slot="sorting">
        <product-grid-sorting :page="page"></product-grid-sorting>
      </template>
      <template v-if="page.data.length == 0" slot="content">
        <product-card-skeleton v-for="n in sizePerPage" :key="n"></product-card-skeleton>
      </template>
      <template v-if="page.data.length > 0" slot="content">
        <product-card v-for="(product) in page.data" :key="product._id" :product="product"></product-card>
      </template>
    </app-layout-grid>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import AppLayoutGrid from '@/components/base/app-layout-grid.vue'
import AppLayoutGridPagination from '@/components/base/app-layout-grid-pagination.vue'
import ProductGridSorting from '@/components/products/product-grid-sorting.vue'
import ProductCard from '@/components/products/product-card.vue'
import ProductCardSkeleton from '@/components/products/product-card-skeleton.vue'
import { Product } from '@/models/product'
import { Page } from '@/models/page'

export default Vue.extend({

  name: 'product-grid',

  props: {
    sizePerPage: {
      type: Number,
      required: true
    } as PropOptions<Number>,
    page: {
      type: Object,
      required: true
    } as PropOptions<Page<Product>>
  },

  components: {
    'app-layout-grid': AppLayoutGrid,
    'product-card': ProductCard,
    'product-card-skeleton': ProductCardSkeleton,
    'product-grid-sorting': ProductGridSorting
  }

})
</script>
