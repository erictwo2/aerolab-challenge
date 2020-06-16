import { shallowMount } from '@vue/test-utils'
import ProductGrid from "@/components/products/product-grid.vue";
import { Page } from '~/models/page';

describe('Product Grid', () => {

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
      sizePerPage: 10
    };

    let wrapper = shallowMount(ProductGrid, {
      propsData: actualProps
    });

    expect(wrapper.exists()).toBeTruthy();
  })

})