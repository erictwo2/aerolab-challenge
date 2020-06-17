<template>
  <div class="my-4 px-0 w-full md:w-1/2 md:my-4 md:px-4 lg:w-1/3 xl:w-1/4">
    <article class="overflow-hidden rounded-sm shadow-md border border-gray-200 transition duration-500 ease-in-out transform hover:border-active hover:border-opacity-75 hover:-translate-y-4 hover:shadow-2xl"
      @mouseover="hover = true"
      @mouseleave="hover = false"
    >
      <div class="static">
        <div class="relative mt-3 mx-3">
          <img v-if="canRedeem >= 0" src="buy-blue.svg" class="absolute top-0 right-0">
          <div v-if="canRedeem < 0" class="absolute top-0 right-0">
            <div class="rounded-full opacity-75 h-10 ml-4 pr-1 pl-4 items-center bg-primary-font flex">
              <span class="text-white text-sm pr-1">You need {{ canRedeem * -1}}</span>
              <img class="pt-1 w-8 h-8" src="coin.svg"/>
            </div>
          </div>
          <img id="product_image" alt="Product image" class="block h-auto w-full" :src="product.img.url">
        </div>
        <div class="border-b mx-6"></div>
        <div class="text-left py-5 px-6">
          <p id="product_category" class="text-base text-secondary-font">{{ product.category }}</p>
          <p id="product_name" class="text-lg text-primary-font font-normal">{{ product.name }}</p>
        </div>
      </div>
      <div v-if="hover && canRedeem >= 0" class="bg-opacity-75 bg-active z-10 absolute top-0 left-0 w-full h-full">
        <div class="relative mt-2 mx-2">
          <img src="buy-white.svg" class="absolute top-0 right-0">
        </div>
        <div class="absolute inset-0">
          <div class="flex h-full justify-center inline-block">
            <div class="mb-auto mt-auto">
              <div class="flex flex-no-wrap justify-center items-center mb-1">
                <span id="product_cost" class="text-4xl text-white">{{ product.cost }}</span>
                <img class="mt-2 ml-2" src="coin.svg">
              </div>
              <app-button-spinner
                @click.native="redeemProduct"
                :success="redeemSuccess"
                :error="redeemError"
                :isLoading="redeemIsLoading"
                :buttonLabel="'Redeem now'"
              >
              </app-button-spinner>
            </div>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import AppButtonSpinner from '@/components/base/app-button-spinner.vue'
import { Product } from '@/models/product'
import UserModule from '@/store/modules/user-module';
import { getModule } from 'vuex-module-decorators';
import RedeemModule from '../../store/modules/redeem-module';

export default Vue.extend({

  name: 'product-card',

  components: {
    'app-button-spinner': AppButtonSpinner
  },

  data: function() {
    return {
      hover: false,
      redeemIsLoading: false,
      redeemSuccess: false,
      redeemError: false,
    };
  },

  props: {
    product: {
      type: Object,
      required: true
    } as PropOptions<Product>
  },

  computed: {
    canRedeem: function () {
      let userModule = getModule(UserModule);
      return userModule.user
        ? (userModule.user.points - (this.product as Product).cost)
        : null;
    }
  },

  methods: {
    async redeemProduct() {
      let userModule = getModule(UserModule);
      let redeemModule = getModule(RedeemModule);
      try {
        this.$data.redeemIsLoading = true;
        await redeemModule.redeemProduct(this.$props.product._id);
        this.$data.redeemIsLoading = false;
        this.$data.redeemSuccess = true;

        let counter = 3;
        let intervalId = setInterval(() => {
          counter = counter - 1;
          if(counter === 0) {
            this.$data.redeemSuccess = false;
            clearInterval(intervalId)
          }
        }, 1000)

        await userModule.getUser();
      } catch (error) {

        this.$data.redeemIsLoading = false;
        this.$data.redeemError = true;

        let counter = 3;
        let intervalId = setInterval(() => {
          counter = counter - 1;
          if(counter === 0) {
            this.$data.redeemError = false;
            clearInterval(intervalId);
          }
        }, 1000)
      }
    }
  }

})
</script>

<style scoped>
#product_image {
  min-width: 252px;
  min-height: 182px;
}
</style>