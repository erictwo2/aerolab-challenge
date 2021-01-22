import { shallowMount } from '@vue/test-utils'
import UserPoints from "@/components/user/user-points.vue";
import { Page } from '~/src/models/page';
import { User } from '~/src/models/user';

describe('User Points', () => {

  let user: User = {
    id: '5a03638052fd231590d04eb5',
    name: 'John Kite',
    points: 2000,
    redeemHistory: [],
    createDate: new Date,
  }
  let actualProps = {
    user: user
  }

  test('should be created', () => {

    let wrapper = shallowMount(UserPoints, {
      propsData: actualProps
    });

    expect(wrapper.exists()).toBeTruthy();
  })

  test('username should be displayed', () => {

    let wrapper = shallowMount(UserPoints, {
      propsData: actualProps
    });

    expect(wrapper.exists()).toBeTruthy();

    let expectedUsername = wrapper.find('#username');
    expect(expectedUsername.exists()).toBeTruthy();
    expect(expectedUsername.text()).toBe('John Kite');
  })

  test('user points should be displayed', () => {

    let wrapper = shallowMount(UserPoints, {
      propsData: actualProps
    });

    expect(wrapper.exists()).toBeTruthy();

    let expectedUserPoints = wrapper.find('#userPoints');
    expect(expectedUserPoints.exists()).toBeTruthy();
    expect(expectedUserPoints.text()).toBe('2000');
  })

})