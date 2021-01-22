import { ProductService } from "~/src/services/product-service"
import { Product } from "~/src/models/product"
import { Page } from "~/src/models/page"

const actualProducts: Product[] = [
  {
    "_id": "5a033eeb364bf301523e9b92",
    "name": "Sandalia Pale Gold YSL",
    "cost": 200,
    "category": "Indumentaria",
    "img": {
      "url": "https://coding-challenge-api.aerolab.co/images/Alienware13-x2.png",
      "hdUrl": "https://coding-challenge-api.aerolab.co/images/Alienware13-x2.png"
    }
  },
  {
    "_id": "5a033f0f364bf301523e9b93",
    "name": "iPhone 8",
    "cost": 1000,
    "category": "Phones",
    "img": {
      "url": "https://coding-challenge-api.aerolab.co/images/SamsungTabS2-x1.png",
      "hdUrl": "https://coding-challenge-api.aerolab.co/images/SamsungTabS2-x1.png"
    }
  },
  {
    "_id": "5a033f0f364bf301523e9b94",
    "name": "iPhone 7 Case Sea-Blue",
    "cost": 400,
    "category": "Accesorios",
    "img": {
      "url": "https://coding-challenge-api.aerolab.co/images/SamsungTabS2-x1.png",
      "hdUrl": "https://coding-challenge-api.aerolab.co/images/SamsungTabS2-x1.png"
    }
  }
]

jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({data: actualProducts}))
}))

import axios from 'axios'

describe('Product Service', () => {

  let service: ProductService = new ProductService();

  it('should get a most recent products', async() => {
    let expectedPage: Page<Product> = await service.findAllPaged({page: 1, size: 10, sortField: '', sortDirection: ''});
    expect((axios as any).get).toBeCalledWith(process.env.baseUrl + '/products')
    expect(expectedPage.totalPages).toBe(1);
    expect(expectedPage.size).toBe(10);
    expect(expectedPage.currentPage).toBe(1);
    expect(expectedPage.total).toBe(3);
    expect(expectedPage.sortField).toBe('');
    expect(expectedPage.sortDirection).toBe('');
    expect(expectedPage.data[0]).toBe(actualProducts[0]);
    expect(expectedPage.data[1]).toBe(actualProducts[1]);
    expect(expectedPage.data[2]).toBe(actualProducts[2]);
  })

  it('should get a lowest price products', async() => {
    let expectedPage: Page<Product> = await service.findAllPaged({page: 1, size: 10, sortField: 'cost', sortDirection: 'ASC'});
    expect((axios as any).get).toBeCalledWith(process.env.baseUrl + '/products')
    expect(expectedPage.totalPages).toBe(1);
    expect(expectedPage.size).toBe(10);
    expect(expectedPage.currentPage).toBe(1);
    expect(expectedPage.total).toBe(3);
    expect(expectedPage.sortField).toBe('cost');
    expect(expectedPage.sortDirection).toBe('ASC');
    expect(expectedPage.data[0].cost).toBe(200);
    expect(expectedPage.data[1].cost).toBe(400);
    expect(expectedPage.data[2].cost).toBe(1000);
  })

  it('should get a highest price products', async() => {
    let expectedPage: Page<Product> = await service.findAllPaged({page: 1, size: 10, sortField: 'cost', sortDirection: 'DESC'});
    expect((axios as any).get).toBeCalledWith(process.env.baseUrl + '/products')
    expect(expectedPage.totalPages).toBe(1);
    expect(expectedPage.size).toBe(10);
    expect(expectedPage.currentPage).toBe(1);
    expect(expectedPage.total).toBe(3);
    expect(expectedPage.sortField).toBe('cost');
    expect(expectedPage.sortDirection).toBe('DESC');
    expect(expectedPage.data[0].cost).toBe(1000);
    expect(expectedPage.data[1].cost).toBe(400);
    expect(expectedPage.data[2].cost).toBe(200);
  })

})