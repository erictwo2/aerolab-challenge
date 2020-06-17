import { shallowMount } from '@vue/test-utils'
import AppLayourGrid from "@/components/base/app-layout-grid.vue";
import { Page } from '~/models/page';

describe('App Layout Grid', () => {

  test('should be created', () => {

    let page: Page<any> = {
      currentPage: 1,
      totalPages: 10,
      size: 10,
      total: 100,
      sortField: null,
      sortDirection: null,
      data: []
    };
    let actualProps = {
      page: page,
      entityName: 'products'
    }

    let wrapper = shallowMount(AppLayourGrid, {
      propsData: actualProps
    });

    expect(wrapper.exists()).toBeTruthy();
  })

})