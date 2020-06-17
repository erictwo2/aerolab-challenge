import axios, { AxiosResponse } from 'axios';
import { User } from '../models/user';

export class UserService {

  async getUser(): Promise<User> {
    const response: AxiosResponse<User> = await axios.get(process.env.baseUrl + '/user/me');
    return response.data;
  }

}
