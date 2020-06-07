<template>
  <button class="rounded-full pr-6 pl-6 p-2 mr-3 ml-3 text-2xl tracking-tight bg-gray-200">{{ label }}</button>
</template>

<script>
  export default {
    name: 'product-filter-button',
    props: ['label']
  }
</script>