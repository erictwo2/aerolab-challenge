import { RedeemService } from "~/services/redeem-service"

const actualResult = {
  "message": "You've redeem the product successfully"
}

jest.mock('axios', () => ({
  post: jest.fn((url, payload) => Promise.resolve({data: actualResult}))
}))

import axios from 'axios'

describe('Redeem Service', () => {

  let service: RedeemService = new RedeemService();

  it('should make a product redeem', async() => {
    let expectedResult = await service.redeem('5a033eeb364bf301523e9b92');
    expect((axios as any).post).toBeCalledWith(process.env.baseUrl + '/redeem', {productId: '5a033eeb364bf301523e9b92'})
    expect(expectedResult).toBe(actualResult);
  })

})