<template>
  <div>
    <app-layout-grid :entityName="'products'" :page="page">
      <template slot="sorting">
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
import { Vue, Component, Watch, Prop } from 'vue-property-decorator'
import AppLayoutGrid from '@/components/base/app-layout-grid.vue'
import AppLayoutGridPagination from '@/components/base/app-layout-grid-pagination.vue'
import ProductGridSorting from '~/components/products/product-grid-sorting.vue'
import ProductCard from '@/components/products/product-card.vue'
import ProductCardSkeleton from '@/components/products/product-card-skeleton.vue'
import { Product } from '@/models/product'
import { getModule } from 'vuex-module-decorators'
import ProductModule from '@/store/modules/product-module'
import { Page } from '../../models/page'

@Component({
  components: {
    'app-layout-grid': AppLayoutGrid,
    'product-card': ProductCard,
    'product-card-skeleton': ProductCardSkeleton,
    'product-grid-sorting': ProductGridSorting
  }
})
export default class ProductGrid extends Vue {

  @Prop({ type: Number, required: true }) readonly sizePerPage!: number;
  @Prop({ type: Object, required: true }) readonly page!: Page<any>;

}
</script>
