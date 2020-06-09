import { mount, Wrapper } from '@vue/test-utils'
import { Product } from '@/models/product';
import ProductCard from "@/components/products/product-card.vue";

describe('Product Card', () => {

  const product: Product = {
    "_id": "5a033eeb364bf301523e9b92",
    "name": "Sandalia Pale Gold YSL",
    "cost": 200,
    "category": "Indumentaria",
    "img": {
      "url": "https://coding-challenge-api.aerolab.co/images/Alienware13-x2.png",
      "hdUrl": "https://coding-challenge-api.aerolab.co/images/Alienware13-x2.png"
    }
  };
  let wrapper: Wrapper<ProductCard>;

  beforeEach(() => {
    wrapper = mount(ProductCard, {
      propsData: {
        product: product
      }
    });
  });

  test('should be created', () => {
    expect(wrapper.exists()).toBeTruthy();
  })

  test('product name should be displayed', () => {
    const productName = wrapper.find('#product_name');
    expect(productName.exists()).toBeTruthy();
    expect(productName.text()).toBe(product.name);
  })

  test('product category should be displayed', () => {
    const productCategory = wrapper.find('#product_category');
    expect(productCategory.exists()).toBeTruthy();
    expect(productCategory.text()).toBe(product.category);
  })

  test('product image should have the image url', () => {
    const productImage = wrapper.find('#product_image');
    expect(productImage.exists()).toBeTruthy();
    expect(productImage.attributes('src')).toBe(product.img.url);
  })

})
