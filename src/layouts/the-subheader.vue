<template>
  <div class="relative" style="">
    <img class="block w-full" :src="image" />
    <div
      class="absolute bottom-0 left-0 xl:ml-32 lg:ml-16 md:ml-12 sm:ml-10 ml-6 xl:mb-32 lg:mb-24 md:mb-16 sm:mb-10 mb-8 text-white font-bold xl:text-6xl lg:text-6xl md:text-6xl sm:text-5xl text-4xl"
    >
      {{ title }}
    </div>
    <div class="absolute bottom-0 left-0 w-full bg-white" style="height: 14% !important;"></div>
  </div>
</template>

<script>
export default {
  name: 'the-subheader',
  props: ['title', 'image']
};
</script>
