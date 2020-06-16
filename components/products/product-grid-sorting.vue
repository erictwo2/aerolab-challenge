<template>
  <div class="flex flex-no-wrap items-center">
    <div class="border-l w-1 mx-6 h-12"></div>
    <span class="text-secondary-font text-2xl font-normal tracking-tight mr-3">Sort by:</span>
    <n-link id="mostRecent" :to="{ path: '/', query: { page: this.page.currentPage, size: this.page.size }}" :class="links.mostRecentClass">
      Most recent
    </n-link>
    <n-link id="lowestPrice" :to="{ path: '/', query: { page: this.page.currentPage, size: this.page.size, sortField: 'cost', sortDirection: 'ASC' }}" :class="links.lowestPriceClass">
      Lowest price
    </n-link>
    <n-link id="highestPrice" :to="{ path: '/', query: { page: this.page.currentPage, size: this.page.size, sortField: 'cost', sortDirection: 'DESC' }}" :class="links.highestPriceClass">
      Highest price
    </n-link>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { Page } from '@/models/page'
import { Product } from '@/models/product'

export default Vue.extend({

  name: 'product-grid-sorting',

  props: {
    page: {
      type: Object,
      required: true
    } as PropOptions<Page<Product>>
  },

  computed: {
    links: function () {

      let active = 'rounded-full h-12 px-6 pt-1 pb-3 mx-3 text-2xl tracking-tight bg-gray-200 cursor-pointer bg-active text-white';
      let inactive = 'rounded-full h-12 px-6 pt-1 pb-3 mx-3 text-2xl text-secondary-font tracking-tight bg-gray-200 cursor-pointer';

      let links = {
        mostRecentClass: active,
        lowestPriceClass: inactive,
        highestPriceClass: inactive,
      };

      if (this.page && this.page.sortField == 'cost' && this.page.sortDirection == 'ASC') {
        links.mostRecentClass = inactive;
        links.lowestPriceClass = active;
        links.highestPriceClass = inactive;
      }

      if (this.page.sortField == 'cost' && this.page.sortDirection == 'DESC') {
        links.mostRecentClass = inactive;
        links.lowestPriceClass = inactive;
        links.highestPriceClass = active;
      }

      return links;
    }
  }

})
</script>