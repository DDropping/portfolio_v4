<template>
  <div class="flex flex-col min-h-screen bg-gray-800 text-white">
    <Navbar />

    <div class="grow">
      <RouterView />
    </div>

    <FooterComponent />
  </div>
</template>

<script>
import Navbar from "./components/navbar/index.vue";
import FooterComponent from "./components/footer/index.vue";

export default {
  name: "App",
  components: { Navbar, FooterComponent },
  data() {},
};
</script>

<style scoped></style>
