import { UserService } from "~/src/services/user-service"
import { User } from "~/src/models/user"

const actualUser: User = {
  id: '5a03638052fd231590d04eb5',
  name: 'John Kite',
  points: 2000,
  redeemHistory: [],
  createDate: new Date,
}

jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({data: actualUser}))
}))

import axios from 'axios'

describe('User Service', () => {

  let service: UserService = new UserService();

  it('should get a user', async() => {
    let expectedUser: User = await service.getUser();
    expect((axios as any).get).toBeCalledWith(process.env.baseUrl + '/user/me')
    expect(expectedUser).toBe(actualUser);
  })

})