import axios, { AxiosResponse } from 'axios';

export class RedeemService {

  endpoint: string = 'https://private-anon-41a8a64696-aerolabchallenge.apiary-proxy.com/redeem';

  async redeem(productId: string): Promise<String> {
    const response: AxiosResponse<String> = await axios.post(this.endpoint, {productId: productId});
    return response.data;
  }

}
