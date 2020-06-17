<template>
  <div class="flex items-center">
    <skeleton-loader-vue type="text" :width="100" :height="24" animation="fade"/>
    <div class="rounded-full h-12 ml-4 pr-4 pl-4 py-1 items-center bg-gray-200 flex">
      <skeleton-loader-vue class="pr-2" type="text" :width="50" :height="24" animation="fade"/>
      <skeleton-loader-vue class="" type="circle" :width="24" :height="24" animation="fade"/>
    </div>
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
export default class UserPointsSkeleton extends Vue { }
</script>
