<template>
  <div class="flex flex-no-wrap items-center">
    <div class="border-l w-1 mx-6 h-12"></div>
    <span class="text-secondary-font text-2xl font-normal tracking-tight mr-3">Sort by:</span>
    <button class="rounded-full h-12 px-6 pt-1 pb-3 mx-3 text-2xl text-white tracking-tight bg-active">Most recent</button>
    <button class="rounded-full h-12 px-6 pt-1 pb-3 mx-3 text-2xl text-secondary-font tracking-tight bg-gray-200">Lowest price</button>
    <button class="rounded-full h-12 px-6 pt-1 pb-3 mx-3 text-2xl text-secondary-font tracking-tight bg-gray-200">Highest price</button>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class ProductGridSorting extends Vue { }
</script>