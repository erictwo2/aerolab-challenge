<template>
  <div class="flex flex-col min-h-screen">
    <the-header>
      <user-points v-if="user" :user="user"></user-points>
      <user-points-skeleton v-if="!user"></user-points-skeleton>
    </the-header>
    <the-subheader title="Electronics" :image="subheaderImage"></the-subheader>
    <product-grid :page="page" :sizePerPage="sizePerPage"></product-grid>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator'
import TheHeader from '@/layouts/the-header.vue'
import TheSubheader from '@/layouts/the-subheader.vue'
import ProductGrid from '@/components/products/product-grid.vue'
import UserPoints from '@/components/user/user-points.vue'
import UserPointsSkeleton from '@/components/user/user-points-skeleton.vue'
import { Product } from '../models/product'
import { Page } from '../models/page'
import { getModule } from 'vuex-module-decorators'
import UserModule from '../store/modules/user-module'
import ProductModule from '../store/modules/product-module'

@Component({
  components: {
    'the-header': TheHeader,
    'the-subheader': TheSubheader,
    'product-grid': ProductGrid,
    'user-points': UserPoints,
    'user-points-skeleton': UserPointsSkeleton
  }
})
export default class ProductPage extends Vue {

  userModule = getModule(UserModule);
  productModule = getModule(ProductModule);

  sizePerPage = 16;
  subheaderImage = 'header-x1.png';

  async mounted() {
    await this.userModule.getUser();
  }

  get user() {
    return this.userModule.user;
  }

  get page() {
    return this.productModule.page;
  }

  get watchProperties() {
    if (!this.page)
      return null;
    else {
      return this.page.currentPage.toString()
        + this.page.sortField 
        + this.page.sortDirection;
    }
  }

  @Watch('watchProperties', { immediate: true })
  async onWatchPropertiesChanged(val: string, oldVal: string) {

    let page: number = this.page && this.page.currentPage ? this.page.currentPage : 1;
    let size: number = this.page && this.page.size ? this.page.size : this.sizePerPage;
    let sortField: string = this.page && this.page.sortField ? this.page.sortField : '';
    let sortDirection: string = this.page && this.page.sortDirection ? this.page.sortDirection : '';

    await this.productModule.findAllPaged({page: page, size: size, sortField: sortField, sortDirection: sortDirection});
    let queryParams = {};

    if (sortField === 'cost' && (sortDirection === 'ASC' || sortDirection === 'DESC'))
      this.$router.push({ path: '/', query: {page: page.toString(), size: size.toString(), sortField: sortField, sortDirection: sortDirection} })
    else
      this.$router.push({ path: '/', query: {page: page.toString(), size: size.toString()} })
  }

}
</script>
