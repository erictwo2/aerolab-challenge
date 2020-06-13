<template>
  <div class="flex flex-col min-h-screen">
    <the-header>
      <user-points v-if="user" :user="user"></user-points>
      <user-points-skeleton v-if="!user"></user-points-skeleton>
    </the-header>
    <the-subheader title="Electronics"></the-subheader>
    <product-grid :sizePerPage="16"></product-grid>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import TheHeader from '@/layouts/the-header.vue'
import TheSubheader from '@/layouts/the-subheader.vue'
import ProductGrid from '@/components/products/product-grid.vue'
import UserPoints from '@/components/user/user-points.vue'
import UserPointsSkeleton from '@/components/user/user-points-skeleton.vue'
import { getModule } from 'vuex-module-decorators'
import UserModule from '../store/modules/user-module'
import { User } from '../models/user'

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

  async created() {
    await this.userModule.getUser();
  }

  get user(): User | null {
    return this.userModule.user;
  }

 }
</script>
