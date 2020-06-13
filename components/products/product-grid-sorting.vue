<template>
  <div class="flex flex-no-wrap items-center">
    <div class="border-l w-1 mx-6 h-12"></div>
    <span class="text-secondary-font text-2xl font-normal tracking-tight mr-3">Sort by:</span>
    <n-link :to="{ path: '/', query: { page: this.page.currentPage, size: this.page.size }}" :class="links.mostRecentClass">
      Most recent
    </n-link>
    <n-link :to="{ path: '/', query: { page: this.page.currentPage, size: this.page.size, sortField: 'cost', sortDirection: 'ASC' }}" :class="links.lowestPriceClass">
      Lowest price
    </n-link>
    <n-link :to="{ path: '/', query: { page: this.page.currentPage, size: this.page.size, sortField: 'cost', sortDirection: 'DESC' }}" :class="links.highestPriceClass">
      Highest price
    </n-link>
  </div>
</template>

<script lang="ts">
import { Vue, Component, PropSync, Prop } from 'vue-property-decorator'
import { Page } from '../../models/page';
import { getModule } from 'vuex-module-decorators';
import ProductModule from '../../store/modules/product-module';

@Component
export default class ProductGridSorting extends Vue {

  @Prop({ type: Object, required: true }) readonly page!: Page<any>

  productModule = getModule(ProductModule);
  active = 'rounded-full h-12 px-6 pt-1 pb-3 mx-3 text-2xl tracking-tight bg-gray-200 cursor-pointer bg-active text-white';
  inactive = 'rounded-full h-12 px-6 pt-1 pb-3 mx-3 text-2xl text-secondary-font tracking-tight bg-gray-200 cursor-pointer';

  get links() {

    let links = {
      mostRecentClass: this.active,
      lowestPriceClass: this.inactive,
      highestPriceClass: this.inactive,
    };

    if (this.productModule.products.sortField == 'cost' && this.productModule.products.sortDirection == 'ASC') {
      links.mostRecentClass = this.inactive;
      links.lowestPriceClass = this.active;
      links.highestPriceClass = this.inactive;
    }

    if (this.productModule.products.sortField == 'cost' && this.productModule.products.sortDirection == 'DESC') {
      links.mostRecentClass = this.inactive;
      links.lowestPriceClass = this.inactive;
      links.highestPriceClass = this.active;
    }

    return links;
  }

}
</script>