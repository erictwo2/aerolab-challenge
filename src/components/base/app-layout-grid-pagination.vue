<template>
  <div class="xl:mx-32 lg:mx-16 md:mx-12 sm:mx-10 mx-6 mb-8">
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
        <a id="prevPage" v-if="page.currentPage > 1" @click="prevPage" class="cursor-pointer">
          <img src="~/assets/icons/arrow-left.svg" />
        </a>
        <a id="nextPage" v-if="page.currentPage < page.totalPages" @click="nextPage" class="ml-3 cursor-pointer">
          <img src="~/assets/icons/arrow-right.svg" />
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
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Page } from '@/models/page';

@Component
export default class AppLayoutGridPagination extends Vue {
  @Prop({ type: Object, required: true }) readonly page!: Page<any>;
  @Prop({ type: String, required: true }) readonly entityName!: string;

  prevPage() {
    this.page.currentPage = this.page.currentPage - 1;
  }

  nextPage() {
    this.page.currentPage = this.page.currentPage + 1;
  }
}
</script>
