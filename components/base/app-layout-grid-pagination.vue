<template>
  <div class="xl:mx-32 lg:mx-16 md:mx-12 sm:mx-10 mx-8 mb-8">
    <div class="flex flex-wrap md:flex-no-wrap items-center justify-between mx-auto">
      <div class="flex flex-no-wrap items-center">
        <span id="description" class="text-primary-font text-2xl font-normal tracking-tight md:mr-3">
          {{ page.size * page.currentPage }} of {{ page.total }} {{ entityName }}
        </span>
        <div class="invisible w-0 lg:visible lg:w-auto">
          <slot name="sorting"></slot>
        </div>
      </div>
      <div class="flex items-center">
        <a id="prevPage" v-if="page.prevPage" @click="prevPage" class="cursor-pointer">
          <img src="arrow-left.svg"/>
        </a>
        <a id="nextPage" v-if="page.nextPage" @click="nextPage" class="ml-3 cursor-pointer">
          <img src="arrow-right.svg"/>
        </a>
      </div>
    </div>
    <div class="flex items-center visible w-auto mt-4 lg:hidden lg:w-0 lg:h-0">
      <slot name="sorting"></slot>
    </div>
    <div class="border-b mt-6"></div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { Page } from '@/models/page'

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
  },

  methods: {
    prevPage() {
      this.page.currentPage = this.page.currentPage - 1;
    },
    nextPage() {
      this.page.currentPage = this.page.currentPage + 1;
    }
  }

})
</script>
