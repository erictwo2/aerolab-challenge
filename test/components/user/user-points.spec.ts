import { mount, Wrapper } from '@vue/test-utils'
import { User } from '@/models/user';
import UserPoints from "@/components/user/user-points.vue";

describe('User Points', () => {

  let wrapper: Wrapper<UserPoints>;

  beforeEach(() => {
    /*wrapper = mount(UserPoints, {
      mocks: {
        getModule: function() {},
        UserModule: null
      }
    });*/
  });

  test('should be created', () => {
    //expect(wrapper.exists()).toBeTruthy();
  })

})
