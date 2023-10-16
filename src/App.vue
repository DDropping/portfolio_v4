<template>
  <div>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/project/1">Project</RouterLink>
  </div>
  <RouterView />
</template>

<script>
import HomePage from "./views/Home.vue";

export default {
  name: "App",
  components: { HomePage },
  data() {},
};
</script>

<style scoped></style>
