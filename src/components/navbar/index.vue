<template>
  <nav class="bg-gray-900">
    <div class="flex justify-center p-4">
      <ul class="flex">
        <li class="ml-5 mr-5">
          <RouterLink to="/" class="block py-2 pl-3 pr-4 text-white"
            >Home</RouterLink
          >
        </li>
        <li class="ml-5 mr-5">
          <RouterLink to="/project" class="block py-2 pl-3 pr-4 text-white"
            >Projects</RouterLink
          >
        </li>
        <li class="ml-5 mr-5">
          <RouterLink to="/about" class="block py-2 pl-3 pr-4 text-white"
            >About</RouterLink
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style></style>
