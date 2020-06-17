<template>
  <div class="xl:mx-32 lg:mx-16 md:mx-12 sm:mx-10 mx-6 mb-8">
    <div class="flex flex-wrap md:flex-no-wrap items-center justify-between mx-auto">
      <div class="flex flex-no-wrap items-center">
        <skeleton-loader-vue class="pr-2 mb-1" type="text" :width="24" :height="22" animation="fade"/>
        <skeleton-loader-vue class="pr-2 mb-1" type="text" :width="20" :height="22" animation="fade"/>
        <skeleton-loader-vue class="pr-2 mb-1" type="text" :width="24" :height="22" animation="fade"/>
        <skeleton-loader-vue class="pr-2 mb-1" type="text" :width="90" :height="22" animation="fade"/>
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
import { Vue, Component } from 'vue-property-decorator'
// @ts-ignore
import SkeletonLoaderVue from 'skeleton-loader-vue'

@Component({
  components: {
    'skeleton-loader-vue': SkeletonLoaderVue
  }
})
export default class AppLayoutGridPagination extends Vue { }
</script>
