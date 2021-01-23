<template>
  <div class="flex flex-no-wrap items-center">
    <div class="hidden lg:block lg:border-l w-1 mx-6 h-12"></div>
    <span class="hidden lg:block text-secondary-font text-xl text-2xl tracking-tight mr-3">Sort by:</span>
    <span id="mostRecent" @click="mostRecentClass" :class="links.mostRecentClass">Most recent</span>
    <span id="lowestPrice" @click="lowestPriceClass" :class="links.lowestPriceClass">Lowest price</span>
    <span id="highestPrice" @click="highestPriceClass" :class="links.highestPriceClass">Highest price</span>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Page } from '@/models/page';
import { Product } from '@/models/product';

@Component
export default class ProductGridSorting extends Vue {
  @Prop({ type: Object, required: false }) readonly page!: Page<Product>;

  get links() {
    let active =
      'rounded-full h-12 pt-3 sm:pt-1 md:pt-1 px-2 sm:px-3 lg:px-4 xl:px-6 mr-1 xs:mr-2 sm:mr-2 md:mr-4 xl:mr-6 ' +
      'text-md sm:text-2xl md:text-2xl tracking-tight bg-gray-200 cursor-pointer bg-active text-white';
    let inactive =
      'rounded-full h-12 pt-3 sm:pt-1 md:pt-1 px-2 sm:px-3 lg:px-4 xl:px-6 mr-1 xs:mr-2 sm:mr-2 md:mr-4 xl:mr-6 ' +
      'text-md sm:text-2xl md:text-2xl text-secondary-font tracking-tight bg-gray-200 cursor-pointer';

    let links = {
      mostRecentClass: active,
      lowestPriceClass: inactive,
      highestPriceClass: inactive
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

  mostRecentClass() {
    this.page.sortField = null;
    this.page.sortDirection = null;
  }

  lowestPriceClass() {
    this.page.sortField = 'cost';
    this.page.sortDirection = 'ASC';
  }

  highestPriceClass() {
    this.page.sortField = 'cost';
    this.page.sortDirection = 'DESC';
  }
}
</script>
