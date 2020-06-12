<template>
  <div class="container mx-auto px-4 mb-8 md:px-12">
    <div class="flex flex-wrap md:flex-no-wrap items-center justify-between mx-auto mt-16">
      <div class="flex flex-no-wrap items-center">
        <span class="text-primary-font text-2xl font-normal tracking-tight mr-3">
          {{ page.size * page.currentPage }} of {{ page.total }} {{ entityName }}
        </span>
        <slot></slot>
      </div>
      <div class="flex items-center">
        <a v-if="page.prevPage" v-bind:href="page.prevPage" class="cursor-pointer">
          <img src="arrow-left.svg"/>
        </a>
        <a v-if="page.nextPage" v-bind:href="page.nextPage" class="ml-3 cursor-pointer">
          <img src="arrow-right.svg"/>
        </a>
      </div>
    </div>
    <div class="border-b mt-6"></div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { Product } from '@/models/product'
import { Page } from '../../models/page'

@Component
export default class ProductGridPagination extends Vue {

  @Prop({ type: Object, required: true }) readonly page!: Page<any>
  @Prop({ type: String, required: true }) readonly entityName!: String

}
</script>