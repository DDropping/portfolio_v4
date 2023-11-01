<template>
  <div class="bg-gray-200 text-gray-600">
    <div id="custom-cursor"></div>
    <div class="grow">
      <RouterView />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {},
  created() {
    window.addEventListener("mousemove", this.handleCursorMove);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleCursorMove);
  },
  methods: {
    handleCursorMove(e) {
      const cursor = document.getElementById("custom-cursor");
      const posX = e.clientX;
      const posY = e.clientY;

      cursor.style.left = `${posX}px`;
      cursor.style.top = `${posY}px`;

      cursor.animate(
        {
          left: `${posX}px`,
          top: `${posY}px`,
        },
        { duration: 500, fill: "forwards" }
      );
    },
  },
};
</script>

<style scoped>
#custom-cursor {
  position: fixed;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  z-index: 100;
  height: 40px;
  width: 40px;
  border: 1px solid #cccccc;
  pointer-events: none;
}
</style>
