<template>
  <div>
    <div v-if="user" class="flex items-center">
      <span class="text-primary-font text-2xl">{{ user.name }}</span>
      <div class="rounded-full h-12 ml-4 pr-2 pl-4 py-1 items-center bg-gray-200 flex">
        <span class="text-primary-font text-2xl pr-1">{{ user.points }}</span>
        <img class="pt-1" src="coin.svg"/>
      </div>
    </div>
    <div v-if="!user" class="flex items-center">
      <skeleton-loader-vue type="text" :width="100" :height="24" animation="fade"/>
      <div class="rounded-full h-12 ml-4 pr-4 pl-4 py-1 items-center bg-gray-200 flex">
        <skeleton-loader-vue class="pr-2" type="text" :width="50" :height="24" animation="fade"/>
        <skeleton-loader-vue class="" type="circle" :width="24" :height="24" animation="fade"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { getModule } from 'vuex-module-decorators'
import UserModule from '@/store/modules/user-module'
import { User } from '../../models/user';
// @ts-ignore
import SkeletonLoaderVue from 'skeleton-loader-vue'

@Component({
  components: {
    'skeleton-loader-vue': SkeletonLoaderVue
  }
})
export default class UserPoints extends Vue {

  userModule = getModule(UserModule);

  async created() {
    await this.userModule.getUser();
  }

  get user(): User | null {
    return this.userModule.user;
  }

}
</script>
