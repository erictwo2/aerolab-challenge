<template>
  <div class="container mx-auto px-4 mb-8 md:px-12">
    <div class="flex flex-wrap md:flex-no-wrap items-center justify-between mx-auto mt-16">
      <div class="flex flex-no-wrap items-center">
        <span id="description" class="text-primary-font text-2xl font-normal tracking-tight mr-3">
          {{ page.size * page.currentPage }} of {{ page.total }} {{ entityName }}
        </span>
        <slot name="sorting"></slot>
      </div>
      <div class="flex items-center">
        <a id="prevPage" v-if="page.prevPage" v-bind:href="page.prevPage" class="cursor-pointer">
          <img src="arrow-left.svg"/>
        </a>
        <a id="nextPage" v-if="page.nextPage" v-bind:href="page.nextPage" class="ml-3 cursor-pointer">
          <img src="arrow-right.svg"/>
        </a>
      </div>
    </div>
    <div class="border-b mt-6"></div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { Page } from '../../models/page'

export default Vue.extend({

  name: 'app-layout-grid-pagination',

  props: {
    page: {
      type: Object,
      required: true
    } as PropOptions<Page<any>>,
    entityName: {
      type: String,
      required: true
    } as PropOptions<String>,
  }

})

</script>