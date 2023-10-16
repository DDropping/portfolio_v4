<template>
  <div class="flex flex-col min-h-screen">
    <Navbar />

    <div class="grow">
      <RouterView />
    </div>

    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/navbar/index.vue";
import Footer from "./components/footer/index.vue";

export default {
  name: "App",
  components: { Navbar, Footer },
  data() {},
};
</script>

<style scoped></style>
