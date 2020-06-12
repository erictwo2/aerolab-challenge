<template>
  <div class="flex flex-col min-h-screen">
    <the-header>
      <user-points></user-points>
    </the-header>
    <the-subheader title="Electronics"></the-subheader>
    <product-grid></product-grid>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import TheHeader from '@/layouts/the-header.vue'
import TheSubheader from '@/layouts/the-subheader.vue'
import ProductGrid from '@/components/products/product-grid.vue'
import UserPoints from '@/components/user/user-points.vue'

@Component({
  components: {
    'the-header': TheHeader,
    'the-subheader': TheSubheader,
    'product-grid': ProductGrid,
    'user-points': UserPoints
  }
})
export default class ProductPage extends Vue {

}
</script>
