<template>
  <div>
    <div v-if="user" class="flex items-center">
      <span class="text-primary-font text-2xl">{{ user.name }}</span>
      <div class="rounded-full h-12 ml-4 pr-2 pl-4 py-1 items-center bg-gray-200 flex">
        <span class="text-primary-font text-2xl pr-1">{{ user.points }}</span>
        <img class="pt-1" src="coin.svg"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { getModule } from 'vuex-module-decorators'
import UserModule from '@/store/modules/user-module'
import { User } from '../../models/user';

@Component
export default class UserPoints extends Vue {

  @Prop({ type: Object, required: true }) readonly user!: User

}
</script>
