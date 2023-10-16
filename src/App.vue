<template>
  <Navbar />
  <RouterView />
</template>

<script>
import Navbar from "./components/navbar/index.vue";

export default {
  name: "App",
  components: { Navbar },
  data() {},
};
</script>

<style scoped></style>
