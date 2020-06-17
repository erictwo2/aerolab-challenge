import { shallowMount } from '@vue/test-utils'
import AppLayoutGridPagination from "@/components/base/app-layout-grid-pagination.vue";
import { Page } from '~/models/page';

describe('App Layout Grid Pagination', () => {

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

    let wrapper = shallowMount(AppLayoutGridPagination, {
      propsData: actualProps
    });

    expect(wrapper.exists()).toBeTruthy();
  })

  test('should show a description for first page', () => {

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

    let wrapper = shallowMount(AppLayoutGridPagination, {
      propsData: actualProps
    });

    let expectedDescription = wrapper.find('#description');
    expect(expectedDescription.exists()).toBeTruthy();
    expect(expectedDescription.text()).toBe('10 of 100 products');
  })

  test('should show a description for tenth page', () => {

    let page: Page<any> = {
      currentPage: 10,
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

    let wrapper = shallowMount(AppLayoutGridPagination, {
      propsData: actualProps
    });

    let expectedDescription = wrapper.find('#description');
    expect(expectedDescription.exists()).toBeTruthy();
    expect(expectedDescription.text()).toBe('100 of 100 products');
  })

  test('if currentPage is 1, the button for previous page should not be shown', () => {

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

    let wrapper = shallowMount(AppLayoutGridPagination, {
      propsData: actualProps
    });

    let expectedPrevPage = wrapper.find('#prevPage');
    expect(expectedPrevPage.exists()).toBeFalsy();
  })

  test('if currentPage is greater than 1, the button on the previous page should show', () => {

    let page: Page<any> = {
      currentPage: 10,
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

    let wrapper = shallowMount(AppLayoutGridPagination, {
      propsData: actualProps
    });

    let expectedPrevPage = wrapper.find('#prevPage');
    expect(expectedPrevPage.exists()).toBeTruthy();
  })

  test('if you click on the prevPage, currentPage should decrease', () => {

    let page: Page<any> = {
      currentPage: 10,
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

    let wrapper = shallowMount(AppLayoutGridPagination, {
      propsData: actualProps
    });

    let expectedPrevPage = wrapper.find('#prevPage');
    expectedPrevPage.trigger('click');
    expect(page.currentPage).toBe(9);
  })

  test('if currentPage is 10, the button for next page should not be shown', () => {

    let page: Page<any> = {
      currentPage: 10,
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

    let wrapper = shallowMount(AppLayoutGridPagination, {
      propsData: actualProps
    });

    let expectedNextPage = wrapper.find('#nextPage');
    expect(expectedNextPage.exists()).toBeFalsy();
  })

  test('if currentPage is less than 10, the button on the next page should show', () => {

    let page: Page<any> = {
      currentPage: 5,
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

    let wrapper = shallowMount(AppLayoutGridPagination, {
      propsData: actualProps
    });

    let expectedNextPage = wrapper.find('#nextPage');
    expect(expectedNextPage.exists()).toBeTruthy();
  })

  test('if you click on the prevPage, currentPage should increase', () => {

    let page: Page<any> = {
      currentPage: 5,
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

    let wrapper = shallowMount(AppLayoutGridPagination, {
      propsData: actualProps
    });

    let expectedPrevPage = wrapper.find('#nextPage');
    expectedPrevPage.trigger('click');
    expect(page.currentPage).toBe(6);
  })

})