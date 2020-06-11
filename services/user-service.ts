import axios, { AxiosResponse } from 'axios';
import { User } from '../models/user';

export class UserService {

  endpoint: string = 'https://private-anon-7fa323019d-aerolabchallenge.apiary-proxy.com/user/me';

  async getUser(): Promise<User> {
    const response: AxiosResponse<User> = await axios.get(this.endpoint);
    return response.data;
  }

}
