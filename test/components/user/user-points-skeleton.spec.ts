import { shallowMount } from '@vue/test-utils'
import UserPointsSkeleton from "@/components/user/user-points-skeleton.vue";

describe('User Points Skeleton', () => {

  test('should be created', () => {
    let wrapper = shallowMount(UserPointsSkeleton);
    expect(wrapper.exists()).toBeTruthy();
  })

})
