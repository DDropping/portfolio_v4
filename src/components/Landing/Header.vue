<template>
  <h1 :class="$style.header">{{ title }}</h1>
</template>

<script>
export default {
  props: ["title"],
};
</script>

<style module>
.header {
  font-family: "Yellowtail", cursive;
  font-size: 160px;
  position: absolute;
  color: #cccccc;
}
</style>
