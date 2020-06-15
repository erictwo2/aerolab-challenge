<template>
  <div class="flex flex-col min-h-screen">
    <the-header>
      <user-points v-if="user" :user="user"></user-points>
      <user-points-skeleton v-if="!user"></user-points-skeleton>
    </the-header>
    <the-subheader title="Electronics"></the-subheader>
    <product-grid :page="page" :sizePerPage="sizePerPage"></product-grid>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
import TheHeader from '@/layouts/the-header.vue'
import TheSubheader from '@/layouts/the-subheader.vue'
import ProductGrid from '@/components/products/product-grid.vue'
import UserPoints from '@/components/user/user-points.vue'
import UserPointsSkeleton from '@/components/user/user-points-skeleton.vue'
import { getModule } from 'vuex-module-decorators'
import UserModule from '../store/modules/user-module'
import { User } from '../models/user'
import ProductModule from '../store/modules/product-module'
import { Product } from '../models/product'
import { Page } from '../models/page'

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

  async created() {
    await this.userModule.getUser();
  }

  get user(): User | null {
    return this.userModule.user;
  }

  get page(): Page<Product> {
    return this.productModule.products;
  }

  @Watch('$route', { immediate: true, deep: true })
  async onUrlChange(newVal: any) {

    let page: number = newVal.query.page ? Number(newVal.query.page) : 1;
    let size: number = newVal.query.size ? Number(newVal.query.size) : this.sizePerPage;
    let sortField: string = newVal.query.sortField ? newVal.query.sortField.toString() : undefined;
    let sortDirection: string = newVal.query.sortDirection ? newVal.query.sortDirection.toString() : undefined;

    this.productModule.findAllPaged({page: page, size: size, sortField: sortField, sortDirection: sortDirection});
  }

 }
</script>
