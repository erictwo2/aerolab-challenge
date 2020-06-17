import { shallowMount } from '@vue/test-utils'
import AppLayoutGridPaginationSkeleton from "@/components/base/app-layout-grid-pagination-skeleton.vue";

describe('App Layout Grid Pagination Skeleton', () => {

  test('should be created', () => {
    let wrapper = shallowMount(AppLayoutGridPaginationSkeleton);
    expect(wrapper.exists()).toBeTruthy();
  })

})
