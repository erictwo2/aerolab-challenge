<template>
  <div class="my-4 px-0 w-full md:w-1/2 md:my-4 md:px-4 lg:w-1/3 xl:w-1/4">
    <article class="overflow-hidden rounded-sm shadow-md border border-gray-200">
      <div class="static">
        <div class="relative mt-3 mx-3">
          <skeleton-loader-vue
            class="absolute top-0 right-0 mt-2"
            type="circle"
            :width="42"
            :height="42"
            animation="fade"
          />
          <div class="block w-full" style="height: 182px" />
        </div>
        <div class="text-left py-5 px-6">
          <skeleton-loader-vue class="pr-2 mb-1" type="text" :width="50" :height="22" animation="fade" />
          <skeleton-loader-vue class="pr-2" type="text" :width="98" :height="22" animation="fade" />
        </div>
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
// @ts-ignore
import SkeletonLoaderVue from 'skeleton-loader-vue';

@Component({
  components: {
    'skeleton-loader-vue': SkeletonLoaderVue
  }
})
export default class ProductCardSkeleton extends Vue {}
</script>
