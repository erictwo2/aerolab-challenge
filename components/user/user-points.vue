<template>
  <div class="flex items-center">
    <span v-if="this.user" class="text-primary-font text-2xl">{{ this.user.name }}</span>
    <div class="rounded-full ml-4 pr-2 pl-3 pt-2 pb-2 bg-gray-200 flex">
      <span v-if="this.user" class="text-primary-font text-2xl pr-1">{{ this.user.points }}</span>
      <img class="pt-1" src="coin.svg"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { getModule } from 'vuex-module-decorators'
import UserModule from '@/store/modules/user-module'
import { User } from '../../models/user';

@Component
export default class UserPoints extends Vue {

  userModule = getModule(UserModule);

  async mounted() {
    await this.userModule.getUser();
  }

  get user(): User | null {
    return this.userModule.user;
  }

}
</script>
