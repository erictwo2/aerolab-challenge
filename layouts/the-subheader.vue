<template>
  <div class="h-80 relative" style="background: url('/header-x1.png'); background-size: 100%">
    <div class="absolute bottom-0 left-0 ml-32 mb-12 text-white font-bold text-6xl">
      {{ title }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'the-subheader',
  props: ['title']
}
</script>