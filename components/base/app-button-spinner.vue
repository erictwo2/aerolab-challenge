<template>
  <div class="flex flex-no-wrap justify-center items-center mb-1">
    <button id="button" v-if="!isLoading && !success && !error" class="rounded-full h-12 px-16 pt-2 pb-2 text-lg text-primary-font tracking-tight bg-gray-200">
      {{ buttonLabel }}
    </button>
    <div id="loader" v-if="isLoading" class="rounded-full h-12 w-12 px-3 pt-3 bg-gray-200">
      <div class="loader ease-linear rounded-full border-4 border-t-4 border-gray-400 h-6 w-6"></div>
    </div>
    <img id="successIcon" v-if="success" class="h-12 w-12" src="~/assets/icons/check.svg">
    <img id="errorIcon" v-if="error" class="h-12 w-12" src="~/assets/icons/error.svg">
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'

export default Vue.extend({

  name: 'app-button-spinner',

  props: {
    buttonLabel: {
      type: String,
      required: true
    } as PropOptions<String>,
    isLoading: {
      type: Boolean,
      required: true
    } as PropOptions<Boolean>,
    success: {
      type: Boolean,
      required: true
    } as PropOptions<Boolean>,
    error: {
      type: Boolean,
      required: true
    } as PropOptions<Boolean>,
  },

})
</script>

<style scoped>
.loader {
  border-top-color: #3498db;
  -webkit-animation: spinner 1.5s linear infinite;
  animation: spinner 1.5s linear infinite;
}

@-webkit-keyframes spinner {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spinner {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>