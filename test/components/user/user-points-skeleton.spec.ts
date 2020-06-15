import { Wrapper, shallowMount } from '@vue/test-utils'
import UserPointsSkeleton from "@/components/user/user-points-skeleton.vue";

describe('User Points Skeleton', () => {

  test('should be created', () => {
    let wrapper: Wrapper<UserPointsSkeleton> = shallowMount(UserPointsSkeleton);
    expect(wrapper.exists()).toBeTruthy();
  })

})
