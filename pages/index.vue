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
import Vue, { PropOptions } from 'vue'
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

export default Vue.extend({

  name: 'product-page',

  components: {
    'the-header': TheHeader,
    'the-subheader': TheSubheader,
    'product-grid': ProductGrid,
    'user-points': UserPoints,
    'user-points-skeleton': UserPointsSkeleton
  },

  data: function() {
    return {
      sizePerPage: 16,
      page: null as Page<Product> | null,
      user: null as User | null,
      subheaderImage: 'header-x1.png'
    };
  },

  async mounted() {
    let userModule = getModule(UserModule);
    let productModule = getModule(ProductModule);
    this.user = await userModule.getUser();
  },

  watch: {
    'page.currentPage': {
      immediate: true,
      handler(movie) {
        this.getPage();
      }
    },
    'page.sortField': {
      immediate: true,
      handler(movie) {
        this.getPage();
      }
    },
    'page.sortDirection': {
      immediate: true,
      handler(movie) {
        this.getPage();
      }
    },
  },

  methods: {
    async getPage() {
      let page: number = this.page && this.page.currentPage ? this.page.currentPage : 1;
      let size: number = this.page && this.page.size ? this.page.size : this.sizePerPage;
      let sortField: string = this.page && this.page.sortField ? this.page.sortField : '';
      let sortDirection: string = this.page && this.page.sortDirection ? this.page.sortDirection : '';

      let productModule = getModule(ProductModule);
      this.page = await productModule.findAllPaged({page: page, size: size, sortField: sortField, sortDirection: sortDirection});
      let queryParams = {};

      if (sortField === 'cost' && (sortDirection === 'ASC' || sortDirection === 'DESC'))
        this.$router.push({ path: '/', query: {page: page.toString(), size: size.toString(), sortField: sortField, sortDirection: sortDirection} })
      else
        this.$router.push({ path: '/', query: {page: page.toString(), size: size.toString()} })
    }
  }

})
</script>
