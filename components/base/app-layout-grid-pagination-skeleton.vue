<template>
  <div class="container mx-auto px-4 mb-8 md:px-12">
    <div class="flex flex-wrap md:flex-no-wrap items-center justify-between mx-auto mt-16">
      <div class="flex flex-no-wrap items-center">
        <skeleton-loader-vue class="pr-2 mb-1" type="text" :width="24" :height="22" animation="fade"/>
        <skeleton-loader-vue class="pr-2 mb-1" type="text" :width="20" :height="22" animation="fade"/>
        <skeleton-loader-vue class="pr-2 mb-1" type="text" :width="24" :height="22" animation="fade"/>
        <skeleton-loader-vue class="pr-2" type="text" :width="90" :height="22" animation="fade"/>
      </div>
      <div class="flex items-center">
        <skeleton-loader-vue class="" type="circle" :width="48" :height="48" animation="fade"/>
        <skeleton-loader-vue class="ml-3" type="circle" :width="48" :height="48" animation="fade"/>
      </div>
    </div>
    <div class="border-b mt-6"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// @ts-ignore
import SkeletonLoaderVue from 'skeleton-loader-vue'

export default Vue.extend({

  name: 'app-layout-grid-pagination',

  components: {
    'skeleton-loader-vue': SkeletonLoaderVue
  }

})
</script>
