<template>

  <div class="my-4 px-0 w-full md:w-1/2 md:my-4 md:px-4 lg:w-1/3 xl:w-1/4">
    <client-only>
      <kinesis-container>
        <kinesis-element :strength="10">
          <article class="overflow-hidden rounded-sm shadow-md border border-gray-200 transition duration-500 ease-in-out transform hover:border-active hover:border-opacity-75 hover:-translate-y-4 hover:shadow-2xl"
            @mouseover="hover = true"
            @mouseleave="hover = false"
          >
            <div class="static">
              <div class="relative mt-3 mx-3">
                <img v-if="canRedeem >= 0" src="~/assets/icons/buy-blue.svg" class="absolute top-0 right-0">
                <div v-if="canRedeem < 0" class="absolute top-0 right-0">
                  <div class="rounded-full opacity-75 h-10 ml-4 pr-1 pl-4 items-center bg-primary-font flex">
                    <span class="text-white text-sm pr-1">You need {{ canRedeem * -1}}</span>
                    <img class="pt-1 w-8 h-8" src="~/assets/icons/coin.svg"/>
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
                <img src="~/assets/icons/buy-white.svg" class="absolute top-0 right-0">
              </div>
              <div class="absolute inset-0">
                <div class="flex h-full justify-center inline-block">
                  <div class="mb-auto mt-auto">
                    <div class="flex flex-no-wrap justify-center items-center mb-1">
                      <span id="product_cost" class="text-4xl text-white">{{ product.cost }}</span>
                      <img class="mt-2 ml-2" src="~/assets/icons/coin.svg">
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
        </kinesis-element>
      </kinesis-container>
    </client-only>
  </div>  
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import AppButtonSpinner from '@/components/base/app-button-spinner.vue'
import { Product } from '@/models/product'
import UserModule from '@/store/modules/user-module';
import { getModule } from 'vuex-module-decorators';
import RedeemModule from '../../store/modules/redeem-module';
// @ts-ignore
import { KinesisContainer, KinesisElement} from 'vue-kinesis'

@Component({
  components: {
    'app-button-spinner': AppButtonSpinner,
    'kinesis-container': KinesisContainer,
    'kinesis-element': KinesisElement,
  }
})
export default class ProductCard extends Vue { 

  @Prop({ type: Object, required: true }) readonly product!: Product

  hover = false;
  redeemIsLoading = false;
  redeemSuccess = false;
  redeemError = false;

  get canRedeem () {
    let userModule = getModule(UserModule);
    return userModule.user
      ? (userModule.user.points - this.product.cost)
      : null;
  }

  async redeemProduct() {

    let userModule = getModule(UserModule);
    let redeemModule = getModule(RedeemModule);

    try {

      this.redeemIsLoading = true;
      await redeemModule.redeemProduct(this.product._id);
      this.redeemIsLoading = false;
      this.redeemSuccess = true;

      let counter = 3;
      let intervalId = setInterval(() => {
        counter = counter - 1;
        if(counter === 0) {
          this.redeemSuccess = false;
          clearInterval(intervalId)
        }
      }, 1000)

      await userModule.getUser();

    } catch (error) {

      this.redeemIsLoading = false;
      this.redeemError = true;

      let counter = 3;
      let intervalId = setInterval(() => {
        counter = counter - 1;
        if(counter === 0) {
          this.redeemError = false;
          clearInterval(intervalId);
        }
      }, 1000)
    }
  }

}
</script>

<style scoped>
#product_image {
  min-height: 182px;
}
</style>
