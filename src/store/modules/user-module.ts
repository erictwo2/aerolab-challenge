import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators';

import { User } from '@/models/user';
import { UserService } from '@/services/user-service';
import { store } from '..';

@Module({ name: 'userModule', store: store, dynamic: true })
export default class UserModule extends VuexModule {
  user: User | null = null;
  private service: UserService = new UserService();

  @Action({ commit: 'setUser' })
  async getUser(): Promise<User> {
    return await this.service.getUser();
  }

  @Mutation
  public setUser(user: User) {
    this.user = user;
  }
}
