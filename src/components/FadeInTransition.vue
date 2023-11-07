<template l>
  <div
    v-motion
    :initial="{
      opacity: 0,
      transition: {
        stiffness: 100,
      },
    }"
    :visible="{
      opacity: 1,
      transition: {
        stiffness: 100,
        ease: 'easeInOut',
      },
    }"
    :delay="200"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
