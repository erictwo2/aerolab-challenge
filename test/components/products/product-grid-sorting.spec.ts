import { shallowMount } from '@vue/test-utils'
import ProductGridSorting from "@/components/products/product-grid-sorting.vue";
import { Page } from '~/models/page';

describe('Product Grid Sorting', () => {

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
      page: page
    }

    let wrapper = shallowMount(ProductGridSorting, {
      propsData: actualProps
    });

    expect(wrapper.exists()).toBeTruthy();
  })

  test('should have 3 filters', () => {

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
      page: page
    }

    let wrapper = shallowMount(ProductGridSorting, {
      propsData: actualProps
    });

    expect(wrapper.find('#mostRecent').text()).toBe('Most recent');
    expect(wrapper.find('#lowestPrice').text()).toBe('Lowest price');
    expect(wrapper.find('#highestPrice').text()).toBe('Highest price');
  })

  test('button to order by most recent should be active', () => {

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
      page: page
    }

    let wrapper = shallowMount(ProductGridSorting, {
      propsData: actualProps
    });

    expect((wrapper.vm as any).links.mostRecentClass).toContain('bg-active text-white');
  })

  test('button to order by lowest price should be active', () => {

    let page: Page<any> = {
      currentPage: 1,
      totalPages: 10,
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
      propsData: actualProps
    });

    expect((wrapper.vm as any).links.lowestPriceClass).toContain('bg-active text-white');
  })

  test('button to order by highest price should be active', () => {

    let page: Page<any> = {
      currentPage: 1,
      totalPages: 10,
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
      propsData: actualProps
    });

    expect((wrapper.vm as any).links.highestPriceClass).toContain('bg-active text-white');
  })

  test('if you click on the most recent button, sort field and direction should be null', () => {

    let page: Page<any> = {
      currentPage: 1,
      totalPages: 10,
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
      propsData: actualProps
    });

    let expectedMostRecent = wrapper.find('#mostRecent');
    expectedMostRecent.trigger('click');
    expect(page.sortField).toBeNull();
    expect(page.sortDirection).toBeNull();
  })

  test('if you click on the lowest price button, sort field and direction should have the values cost and ASC', () => {

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
      page: page
    }

    let wrapper = shallowMount(ProductGridSorting, {
      propsData: actualProps
    });

    let expectedMostRecent = wrapper.find('#lowestPrice');
    expectedMostRecent.trigger('click');
    expect(page.sortField).toBe('cost');
    expect(page.sortDirection).toBe('ASC');
  })

  test('if you click on the highest price button, sort field and direction should have the values cost and DESC', () => {

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
      page: page
    }

    let wrapper = shallowMount(ProductGridSorting, {
      propsData: actualProps
    });

    let expectedMostRecent = wrapper.find('#highestPrice');
    expectedMostRecent.trigger('click');
    expect(page.sortField).toBe('cost');
    expect(page.sortDirection).toBe('DESC');
  })

})