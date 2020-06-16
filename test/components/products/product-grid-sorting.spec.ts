import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import ProductGridSorting from "@/components/products/product-grid-sorting.vue";
import { Page } from '~/models/page';

describe('Product Grid Sorting', () => {

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
      page: page
    }

    let wrapper = shallowMount(ProductGridSorting, {
      propsData: actualProps,
      stubs: {
        'n-link': RouterLinkStub
      }
    });

    expect(wrapper.exists()).toBeTruthy();
  })

  test('should have 3 filters', () => {

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
      page: page
    }

    let wrapper = shallowMount(ProductGridSorting, {
      propsData: actualProps,
      stubs: {
        'n-link': RouterLinkStub
      }
    });

    expect(wrapper.find('#mostRecent').text()).toBe('Most recent');
    expect(wrapper.find('#lowestPrice').text()).toBe('Lowest price');
    expect(wrapper.find('#highestPrice').text()).toBe('Highest price');
  })

  test('link to order by most recent should be active', () => {

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
      page: page
    }

    let wrapper = shallowMount(ProductGridSorting, {
      propsData: actualProps,
      stubs: {
        'n-link': RouterLinkStub
      }
    });

    expect((wrapper.vm as any).links.mostRecentClass).toContain('bg-active text-white');
  })

  test('link to order by lowest price should be active', () => {

    let page: Page<any> = {
      prevPage: null,
      nextPage: null,
      currentPage: 1,
      size: 10,
      total: 100,
      sortField: 'cost',
      sortDirection: 'ASC',
      data: []
    };
    let actualProps = {
      page: page
    }

    let wrapper = shallowMount(ProductGridSorting, {
      propsData: actualProps,
      stubs: {
        'n-link': RouterLinkStub
      }
    });

    expect((wrapper.vm as any).links.lowestPriceClass).toContain('bg-active text-white');
  })

  test('link to order by highest price should be active', () => {

    let page: Page<any> = {
      prevPage: null,
      nextPage: null,
      currentPage: 1,
      size: 10,
      total: 100,
      sortField: 'cost',
      sortDirection: 'DESC',
      data: []
    };
    let actualProps = {
      page: page
    }

    let wrapper = shallowMount(ProductGridSorting, {
      propsData: actualProps,
      stubs: {
        'n-link': RouterLinkStub
      }
    });

    expect((wrapper.vm as any).links.highestPriceClass).toContain('bg-active text-white');
  })

})