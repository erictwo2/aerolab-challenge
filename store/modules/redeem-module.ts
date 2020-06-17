import { VuexModule, Module, Action, Mutation } from "vuex-module-decorators";

import { store } from "..";
import { RedeemService } from "~/services/redeem-service";

@Module({ name: 'redeemModule', store: store, dynamic: true})
export default class RedeemModule extends VuexModule {

  reedemResult: string | null = null;
  private service: RedeemService = new RedeemService();

  @Action({commit: 'setRedeemResult'})
  async redeemProduct(productId: string): Promise<String> {
    return await this.service.redeem(productId);
  }

  @Mutation
  public setRedeemResult(reedemResult: string) {
    this.reedemResult = reedemResult;
  }

}
