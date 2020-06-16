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
import Vue, { PropOptions } from 'vue'
import { Page } from '@/models/page'
import AppLayoutGridPagination from '@/components/base/app-layout-grid-pagination.vue'

export default Vue.extend({

  name: 'app-layout-grid',

  components: {
    'app-layout-grid-pagination': AppLayoutGridPagination
  },

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
