<template>
  <div
    class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
  >
    <img :src="data.imgSrc" class="rounded-t-lg" />
    <div class="p-5">
      <h5 class="mb-2 font-bold text-lg">
        {{ data.name }}
      </h5>
      <p class="mb-3 text-sm font-normal">
        {{ data.description }}
      </p>
      <a
        href="#"
        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-gray-800 bg-white rounded-lg hover:bg-gray-400 focus:ring-4 focus:outline-none"
      >
        More Details
        <svg
          class="w-3.5 h-3.5 ml-2"
          aria-hidden="true"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  props: ["data"],
};
</script>
<style module></style>
