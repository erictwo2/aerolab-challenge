import { Wrapper, shallowMount } from '@vue/test-utils'
import AppLayourGrid from "@/components/base/app-layout-grid.vue";
import { Page } from '~/models/page';

describe('App Layout Grid', () => {

  test('should be created', () => {

    let page: Page<any> = {
      prevPage: null,
      nextPage: null,
      currentPage: 1,
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

    let wrapper: Wrapper<AppLayourGrid> = shallowMount(AppLayourGrid, {
      propsData: actualProps
    });

    expect(wrapper.exists()).toBeTruthy();
  })

})