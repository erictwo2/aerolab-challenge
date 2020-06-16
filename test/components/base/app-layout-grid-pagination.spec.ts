import { shallowMount } from '@vue/test-utils'
import AppLayoutGridPagination from "@/components/base/app-layout-grid-pagination.vue";
import { Page } from '~/models/page';

describe('App Layout Grid Pagination', () => {

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

    let wrapper = shallowMount(AppLayoutGridPagination, {
      propsData: actualProps
    });

    expect(wrapper.exists()).toBeTruthy();
  })

  test('should show a description for first page', () => {

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

    let wrapper = shallowMount(AppLayoutGridPagination, {
      propsData: actualProps
    });

    let expectedDescription = wrapper.find('#description');
    expect(expectedDescription.exists()).toBeTruthy();
    expect(expectedDescription.text()).toBe('10 of 100 products');
  })

  test('should show a description for tenth page', () => {

    let page: Page<any> = {
      prevPage: null,
      nextPage: null,
      currentPage: 10,
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

    let wrapper = shallowMount(AppLayoutGridPagination, {
      propsData: actualProps
    });

    let expectedDescription = wrapper.find('#description');
    expect(expectedDescription.exists()).toBeTruthy();
    expect(expectedDescription.text()).toBe('100 of 100 products');
  })

  test('if prevPage is null, the button for previous page should not be shown', () => {

    let page: Page<any> = {
      prevPage: null,
      nextPage: null,
      currentPage: 10,
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

    let wrapper = shallowMount(AppLayoutGridPagination, {
      propsData: actualProps
    });

    let expectedPrevPage = wrapper.find('#prevPage');
    expect(expectedPrevPage.exists()).toBeFalsy();
  })

  test('if prevPage is not empty, the button on the previous page should show', () => {

    let page: Page<any> = {
      prevPage: '?page=9&size=10',
      nextPage: null,
      currentPage: 10,
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

    let wrapper = shallowMount(AppLayoutGridPagination, {
      propsData: actualProps
    });

    let expectedPrevPage = wrapper.find('#prevPage');
    expect(expectedPrevPage.exists()).toBeTruthy();
    expect(expectedPrevPage.attributes('href')).toBe('?page=9&size=10');
  })

  test('if nextPage is null, the button for next page should not be shown', () => {

    let page: Page<any> = {
      prevPage: null,
      nextPage: null,
      currentPage: 5,
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

    let wrapper = shallowMount(AppLayoutGridPagination, {
      propsData: actualProps
    });

    let expectedNextPage = wrapper.find('#nextPage');
    expect(expectedNextPage.exists()).toBeFalsy();
  })

  test('if nextPage is not empty, the button on the next page should show', () => {

    let page: Page<any> = {
      prevPage: null,
      nextPage: '?page=6&size=10',
      currentPage: 5,
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

    let wrapper = shallowMount(AppLayoutGridPagination, {
      propsData: actualProps
    });

    let expectedNextPage = wrapper.find('#nextPage');
    expect(expectedNextPage.exists()).toBeTruthy();
    expect(expectedNextPage.attributes('href')).toBe('?page=6&size=10');
  })

})