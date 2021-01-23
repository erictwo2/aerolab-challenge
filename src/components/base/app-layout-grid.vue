<template>
  <div>
    <app-layout-grid-pagination v-if="page" v-bind="$props">
      <template slot="sorting">
        <slot name="sorting"></slot>
      </template>
    </app-layout-grid-pagination>
    <app-layout-grid-pagination-skeleton v-if="!page"></app-layout-grid-pagination-skeleton>
    <div class="xl:mx-32 lg:mx-16 md:mx-12 sm:mx-10 mx-6">
      <div class="flex flex-wrap -mx-1 lg:-mx-4">
        <slot name="content"></slot>
      </div>
    </div>
    <app-layout-grid-pagination v-if="page" v-bind="$props" class="mt-8"></app-layout-grid-pagination>
    <app-layout-grid-pagination-skeleton v-if="!page"></app-layout-grid-pagination-skeleton>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Page } from '@/models/page';
import AppLayoutGridPagination from '@/components/base/app-layout-grid-pagination.vue';
import AppLayoutGridPaginationSkeleton from '@/components/base/app-layout-grid-pagination-skeleton.vue';

@Component({
  components: {
    'app-layout-grid-pagination': AppLayoutGridPagination,
    'app-layout-grid-pagination-skeleton': AppLayoutGridPaginationSkeleton
  }
})
export default class AppLayoutGrid extends Vue {
  @Prop({ type: Object, required: false }) readonly page!: Page<any>;
  @Prop({ type: String, required: true }) readonly entityName!: string;
}
</script>
