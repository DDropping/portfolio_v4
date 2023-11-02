<template>
  <div class="bg-gray-200 text-gray-600">
    <div id="custom-cursor"></div>
    <div id="inner-cursor"></div>

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
    window.addEventListener(
      "mouseOverClickableElement",
      this.handleMouseOverClickableElement
    );
    window.addEventListener(
      "mouseLeaveClickableElement",
      this.handleMouseLeaveClickableElement
    );
  },
  unmounted() {
    window.removeEventListener("mousemove", this.handleCursorMove);
  },
  methods: {
    handleCursorMove(e) {
      const cursor = document.getElementById("custom-cursor");
      const innerCursor = document.getElementById("inner-cursor");
      const posX = e.clientX;
      const posY = e.clientY;

      cursor.animate(
        {
          left: `${posX}px`,
          top: `${posY}px`,
        },
        { duration: 500, fill: "forwards" }
      );
      innerCursor.animate(
        {
          left: `${posX}px`,
          top: `${posY}px`,
        },
        { duration: 500, fill: "forwards" }
      );
    },
    handleMouseOverClickableElement(e) {
      const cursor = document.getElementById("custom-cursor");
      const innerCursor = document.getElementById("inner-cursor");

      cursor.animate(
        {
          height: `65px`,
          width: `65px`,
          border: "1px solid #40e0d0",
        },
        { duration: 200, fill: "forwards" }
      );
      innerCursor.animate(
        {
          height: `50px`,
          width: `50px`,
          border: "2px solid #40e0d0",
          opacity: 1,
        },
        { duration: 200, fill: "forwards" }
      );
    },
    handleMouseLeaveClickableElement(e) {
      const cursor = document.getElementById("custom-cursor");
      const innerCursor = document.getElementById("inner-cursor");

      cursor.animate(
        {
          height: `40px`,
          width: `40px`,
          border: "1px solid #cccccc",
        },
        { duration: 200, fill: "forwards" }
      );
      innerCursor.animate(
        {
          height: `0`,
          width: `0`,
          border: "1px solid #cccccc",
          opacity: 0,
        },
        { duration: 200, fill: "forwards" }
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

#inner-cursor {
  position: fixed;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  z-index: 100;
  height: 0px;
  width: 0px;
  border: 1px solid #cccccc;
  pointer-events: none;
  opacity: 0;
}
</style>
