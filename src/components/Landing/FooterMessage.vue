<template>
  <div :class="$style.container">
    <p :class="$style.footer">Be the reason someone smiles today</p>
  </div>
</template>
<script>
export default {};
</script>
<style module>
.container {
  margin-top: 300px;
  display: flex;
  justify-content: center;
  height: 100px;
}
.footer {
  font-family: "Yellowtail", cursive;
  font-size: 40px;
  position: absolute;
  color: #cccccc;
}
</style>
