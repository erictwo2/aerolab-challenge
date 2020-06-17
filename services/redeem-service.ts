import axios, { AxiosResponse } from 'axios';

export class RedeemService {

  async redeem(productId: string): Promise<String> {
    const response: AxiosResponse<String> = await axios.post(process.env.baseUrl + '/redeem', {productId: productId});
    return response.data;
  }

}
