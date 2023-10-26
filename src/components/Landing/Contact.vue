<template>
  <div :class="$style.containerd">
    <TitleHeader title="Contact" />
  </div>
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
</style>
