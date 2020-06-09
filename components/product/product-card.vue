<template>
  <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
    <article class="overflow-hidden rounded-sm shadow-md border border-gray-200">
      <div class="relative mt-3 mx-3">
        <button class="absolute top-0 right-0">
          <img class="" src="buy-blue.svg">
        </button>
        <img id="product_image" alt="Product image" class="block h-auto w-full" :src="product.img.url">
      </div>
      <div class="border-b mx-6"></div>
      <div class="text-left py-5 px-6">
        <p id="product_category" class="text-base text-secondary-text">{{ product.category }}</p>
        <p id="product_name" class="text-lg text-primary-text font-normal">{{ product.name }}</p>
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { Product } from '@/models/product'

@Component
export default class ProductCard extends Vue {

  @Prop({ type: Object, required: true }) readonly product!: Product

}
</script>
