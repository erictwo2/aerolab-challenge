import { Wrapper, shallowMount } from '@vue/test-utils'
import ProductCardSkeleton from "@/components/products/product-card-skeleton.vue";

describe('Product Card Skeleton', () => {

  test('should be created', () => {
    let wrapper: Wrapper<ProductCardSkeleton> = shallowMount(ProductCardSkeleton);
    expect(wrapper.exists()).toBeTruthy();
  })

})
