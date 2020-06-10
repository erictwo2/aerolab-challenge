<template>
  <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
    <article class="overflow-hidden rounded-sm shadow-md border border-gray-200 transition duration-500 ease-in-out transform hover:border-active hover:border-opacity-75 hover:-translate-y-4 hover:shadow-2xl"
      @mouseover="hover = true"
      @mouseleave="hover = false"
    >
      <div class="static">
        <div class="relative mt-3 mx-3">
          <button class="absolute top-0 right-0">
            <img src="buy-blue.svg">
          </button>
          <img id="product_image" alt="Product image" class="block h-auto w-full" :src="product.img.url">
        </div>
        <div class="border-b mx-6"></div>
        <div class="text-left py-5 px-6">
          <p id="product_category" class="text-base text-secondary-font">{{ product.category }}</p>
          <p id="product_name" class="text-lg text-primary-font font-normal">{{ product.name }}</p>
        </div>
      </div>
      <div v-if="hover" class="bg-opacity-75 bg-active z-10 absolute top-0 left-0 w-full h-full">
        <div class="relative mt-2 mx-2">
          <button class="absolute top-0 right-0">
            <img src="buy-white.svg">
          </button>
        </div>
        <div class="absolute inset-0">
          <div class="flex h-full justify-center inline-block">
            <div class="mb-auto mt-auto">
              <div class="flex flex-no-wrap justify-center items-center mb-1">
                <span id="product_cost" class="text-4xl text-white">{{ product.cost }}</span>
                <img class="mt-2 ml-2" src="coin.svg">
              </div>
              <button id="product_redeem" class="rounded-full h-12 px-16 pt-2 pb-2 text-lg text-primary-font tracking-tight bg-gray-200">Redeem now</button>
            </div>
          </div>
        </div>
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

  data() {
    return {
      hover: false,
    };
  }

}
</script>
