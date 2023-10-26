<template>
  <section :class="$style.container">
    <TitleHeader title="About Me" />
    <p :class="$style.text">
      Id anim non aliquip ut. Pariatur sint quis aute deserunt non tempor
      excepteur. Reprehenderit sunt irure exercitation ullamco id.
    </p>
  </section>
</template>

<script>
import TitleHeader from "./Header.vue";

export default {
  components: {
    TitleHeader,
  },
};
</script>

<style module>
.container {
  position: relative;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.text {
  font-size: 40px;
  z-index: 10;
  text-align: center;
}
</style>
