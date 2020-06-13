<template>
  <div>
    <app-layout-grid-pagination v-bind="$props">
      <template slot="sorting">
        <slot name="sorting"></slot>
      </template>
    </app-layout-grid-pagination>
    <div class="container mx-auto px-4 md:px-12">
      <div class="flex flex-wrap -mx-1 lg:-mx-4">
        <slot name="content"></slot>
      </div>
    </div>
    <app-layout-grid-pagination v-bind="$props"></app-layout-grid-pagination>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import AppLayoutGridPagination from '@/components/base/app-layout-grid-pagination.vue'
import { Page } from '../../models/page'

@Component({
  components: {
    'app-layout-grid-pagination': AppLayoutGridPagination,
  }
})
export default class AppLayoutGrid extends Vue {

  @Prop({ type: Object, required: true }) readonly page!: Page<any>
  @Prop({ type: String, required: true }) readonly entityName!: String

 }
</script>
