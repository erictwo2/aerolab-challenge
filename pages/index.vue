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

const userModule = getModule(UserModule);
const productModule = getModule(ProductModule);

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
      subheaderImage: 'header-x1.png'
    };
  },

  computed: {
    user: function () {
      return userModule.user;
    },
    watchProperties() {
      if (!this.$data.page)
        return null;
      else {
        return this.$data.page.currentPage.toString()
          + this.$data.page.sortField 
          + this.$data.page.sortDirection;
      }
    }
  },

  async mounted() {
    await userModule.getUser();
  },

  watch: {
    watchProperties: {
      immediate: true,
      handler() {
        let page: number = this.$data.page && this.$data.page.currentPage ? this.$data.page.currentPage : 1;
        let size: number = this.$data.page && this.$data.page.size ? this.$data.page.size : this.$data.sizePerPage;
        let sortField: string = this.$data.page && this.$data.page.sortField ? this.$data.page.sortField : '';
        let sortDirection: string = this.$data.page && this.$data.page.sortDirection ? this.$data.page.sortDirection : '';

        productModule.findAllPaged({page: page, size: size, sortField: sortField, sortDirection: sortDirection}).then(t => this.$data.page = t);
        let queryParams = {};

        if (sortField === 'cost' && (sortDirection === 'ASC' || sortDirection === 'DESC'))
          this.$router.push({ path: '/', query: {page: page.toString(), size: size.toString(), sortField: sortField, sortDirection: sortDirection} })
        else
          this.$router.push({ path: '/', query: {page: page.toString(), size: size.toString()} })
      }
    }
  },

})
</script>
