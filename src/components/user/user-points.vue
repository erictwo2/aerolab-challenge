<template>
  <div class="flex items-center">
    <span id="username" class="text-primary-font text-2xl">{{ user.name }}</span>
    <div class="rounded-full h-12 ml-4 pr-2 pl-4 py-1 items-center bg-gray-200 flex">
      <span id="userPoints" class="text-primary-font text-2xl pr-1">{{ user.points }}</span>
      <img class="pt-1" src="~/assets/icons/coin.svg" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { User } from '@/models/user';

@Component
export default class UserPoints extends Vue {
  @Prop({ type: Object, required: true }) readonly user!: User;
}
</script>
