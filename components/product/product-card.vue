<template>
  <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
    <article class="overflow-hidden rounded-sm shadow-md">
      <div class="relative mt-3 mx-3">
        <button class="absolute top-0 right-0">
          <img class="" src="buy-blue.svg">
        </button>
        <img alt="Placeholder" class="block h-auto w-full" src="MacbookPro-x1.png">
      </div>
      <div class="border-b mx-6"></div>
      <div class="text-left py-5 px-6">
        <p class="text-base text-secondary-text">Laptops</p>
        <p class="text-lg text-primary-text font-normal">Macbook Pro</p>
      </div>
    </article>
  </div>
</template>

<script>
  export default {
    name: 'product-card'
  }
</script>