<template>
  <div class="flex flex-no-wrap items-center">
    <div class="border-l w-1 mx-6 h-12"></div>
    <span class="text-secondary-font text-2xl font-normal tracking-tight mr-3">Sort by:</span>
    <a id="mostRecent"  @click="mostRecentClass" :class="links.mostRecentClass">
      Most recent
    </a>
    <a id="lowestPrice"  @click="lowestPriceClass" :class="links.lowestPriceClass">
      Lowest price
    </a>
    <a id="highestPrice"  @click="highestPriceClass" :class="links.highestPriceClass">
      Highest price
    </a>
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
      required: false
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
  },

  methods: {
    mostRecentClass() {
      this.page.sortField = null;
      this.page.sortDirection = null;
    },
    lowestPriceClass() {
      this.page.sortField = 'cost';
      this.page.sortDirection = 'ASC';
    },
    highestPriceClass() {
      this.page.sortField = 'cost';
      this.page.sortDirection = 'DESC';
    }
  }

})
</script>