<template>
  <button class="rounded-full h-12 px-6 pt-1 pb-3 mx-3 text-2xl text-secondary-text tracking-tight bg-gray-200">{{ label }}</button>
</template>

<script>
  export default {
    name: 'product-filter-button',
    props: ['label']
  }
</script>