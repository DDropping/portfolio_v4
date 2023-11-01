<template>
  <button>
    <div :class="$style.container">
      <div
        :class="[
          {
            [$style.slidingBackground]: true,
            [$style.green]: color === 'green',
          },
        ]"
      ></div>
      <div :class="$style.content"><slot></slot></div>
    </div>
  </button>
</template>

<script>
export default {
  props: ["color"],
};
</script>

<style module>
.container {
  display: inline-block;
  position: relative;
}

.container:hover .slidingBackground {
  width: 100%;
}

.content {
  padding: 5px 10px;
  font-weight: bold;
}

.slidingBackground {
  position: absolute;
  top: 0;
  z-index: -1;
  background-color: #fff;
  width: 30px;
  height: 40px;
  transition-duration: 300ms;
}

.green {
  background-color: rgb(5 255 38 / 60%);
  width: 100%;
}
</style>
