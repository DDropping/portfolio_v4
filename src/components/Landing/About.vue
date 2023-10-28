<template>
  <section :class="$style.container">
    <TitleHeader title="About Me" />

    <div :class="$style.overlay">
      <p :class="[{ [$style.about]: isExpanded }]">
        Hey there! If you'd like to learn a little about me, let me sum it up
        with the three things I love. Traveling, being outdoors, and building
        things that live on the internet.
      </p>
      <button
        :class="[
          { [$style.visible]: !isExpanded, [$style.hidden]: isExpanded },
        ]"
        @click="toggleExpanded"
      >
        Show More >
      </button>
      <p
        :class="[
          { [$style.visible]: isExpanded, [$style.hidden]: !isExpanded },
        ]"
      >
        I could go on and on about the first two but lets key in on the latter.
        My interest in software engineering and web development started back in
        2018 when I picked up my first book on html and css. Little did I know
        that would strike the beginning of a life long passion.
      </p>
      <p
        :class="[
          { [$style.visible]: isExpanded, [$style.hidden]: !isExpanded },
        ]"
      >
        Fast-forward to today, and I've had the privilege of working at a
        start-up turned large corporation for the past few years; honing my
        skills in designing, architecting, and developing digital experiences
        that make people's lives easier.
      </p>
      <button
        :class="[
          { [$style.visible]: isExpanded, [$style.hidden]: !isExpanded },
        ]"
        @click="toggleExpanded"
      >
        Show Less &lt;
      </button>
    </div>
  </section>
</template>

<script>
import TitleHeader from "./Header.vue";
import { ref } from "vue";

export default {
  components: {
    TitleHeader,
  },
  setup() {
    const isExpanded = ref(false);
    const toggleExpanded = () => {
      isExpanded.value = !isExpanded.value;
    };

    return { isExpanded, toggleExpanded };
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

.overlay {
  z-index: 10;
}

.visible {
  display: block;
}

.hidden {
  display: none;
}

.text {
  font-size: 40px;
  text-align: center;
}

.about {
  font-size: 30px;
  transition-duration: 300ms;
  z-index: 10;
}
</style>
