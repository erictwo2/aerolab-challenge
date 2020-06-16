import { shallowMount } from '@vue/test-utils'
import AppButtonSpinner from "@/components/base/app-button-spinner.vue";

describe('App Button Spinner', () => {

  test('should be created', () => {

    let actualProps = {
      buttonLabel: 'Redeem now',
      isLoading: false,
      success: false,
      error: false,
    }

    let wrapper = shallowMount(AppButtonSpinner, {
      propsData: actualProps
    });

    expect(wrapper.exists()).toBeTruthy();
  })

  test('there should be a button with label redeem now', () => {

    let actualProps = {
      buttonLabel: 'Redeem now',
      isLoading: false,
      success: false,
      error: false,
    }

    let wrapper = shallowMount(AppButtonSpinner, {
      propsData: actualProps
    });

    let expectedButton = wrapper.find('#button');
    expect(expectedButton.exists()).toBeTruthy();
    expect(expectedButton.text()).toBe('Redeem now');
  })

  test('there should be a loader', () => {

    let actualProps = {
      buttonLabel: 'Redeem now',
      isLoading: true,
      success: false,
      error: false,
    }

    let wrapper = shallowMount(AppButtonSpinner, {
      propsData: actualProps
    });

    let expectedLoader = wrapper.find('#loader');
    expect(expectedLoader.exists()).toBeTruthy();
  })

  test('there should be an image with a check icon', () => {

    let actualProps = {
      buttonLabel: 'Redeem now',
      isLoading: false,
      success: true,
      error: false,
    }

    let wrapper = shallowMount(AppButtonSpinner, {
      propsData: actualProps
    });

    let expectedImage = wrapper.find('#successIcon');
    expect(expectedImage.exists()).toBeTruthy();
    expect(expectedImage.attributes('src')).toBe('~/assets/icons/check.svg');
  })

  test('there should be an image with a error icon', () => {

    let actualProps = {
      buttonLabel: 'Redeem now',
      isLoading: false,
      success: false,
      error: true,
    }

    let wrapper = shallowMount(AppButtonSpinner, {
      propsData: actualProps
    });

    let expectedImage = wrapper.find('#errorIcon');
    expect(expectedImage.exists()).toBeTruthy();
    expect(expectedImage.attributes('src')).toBe('~/assets/icons/error.svg');
  })

})
