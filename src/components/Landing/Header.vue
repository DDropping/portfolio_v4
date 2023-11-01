<template>
  <h1 :id="title" :class="$style.header">{{ title }}</h1>
</template>

<script>
export default {
  props: ["title"],
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll(event) {
      var element = document.getElementById(this.title);
      var a = element.getBoundingClientRect().top;

      var value = -a * 0.2 + 100;
      if (value < 300) {
        element.style.transform = "translateX(" + value + "px)";
      }
    },
  },
};
</script>

<style module>
.header {
  font-family: "Yellowtail", cursive;
  font-size: 100px;
  position: absolute;
  color: #cccccc;
}

@media screen and (min-width: 800px) {
  .header {
    font-size: 160px;
  }
}
</style>
