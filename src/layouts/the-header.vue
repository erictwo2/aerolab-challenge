<template>
  <header class="bg-white">
    <div class="flex flex-wrap md:flex-no-wrap items-center justify-between mx-auto pt-5 pb-5 md:p-4">
      <div class="flex items-center ml-10">
        <img src="aerolab-logo.svg" class="mr-3 w-10" />
      </div>
      <div class="flex items-center mr-6">
        <slot></slot>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'the-header'
};
</script>
