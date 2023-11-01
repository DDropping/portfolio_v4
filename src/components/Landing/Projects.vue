<template>
  <section :class="$style.container">
    <div class="overflow-x-hidden">
      <TitleHeader title="Projects" :class="$style.title" />
    </div>

    <div
      :class="$style.content"
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
      :delay="400"
    >
      <BoardRackv2 />
    </div>

    <div
      :class="$style.content"
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
      :delay="400"
    >
      <SortVis />
    </div>

    <div
      :class="$style.content"
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
      :delay="400"
    >
      <SamsDesigns />
    </div>

    <div class="flex flex-col justify-center relative z-10 mb-[200px]">
      <p class="text-center">
        To view the full portfolio of my work, visit my GitHub by clicking the
        link below
      </p>
      <br />
      <SlidingButton>
        <a
          href="https://github.com/DDropping"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Github
        </a>
      </SlidingButton>
    </div>
  </section>
</template>

<script>
import TitleHeader from "./Header.vue";
import SlidingButton from "../SlidingButton.vue";
import BoardRackv2 from "./projects/Boardrackv2.vue";
import SortVis from "./projects/SortVis.vue";
import SamsDesigns from "./projects/SamsDesigns.vue";

export default {
  components: {
    TitleHeader,
    SlidingButton,
    BoardRackv2,
    SortVis,
    SamsDesigns,
  },
  setup() {
    const handleShowMore = () => {};

    return { handleShowMore };
  },
};
</script>

<style module>
.container {
  position: relative;
  min-height: 100vh;
  min-width: 100vw;
}

.content {
  position: relative;
  z-index: 10;
  display: flex;
}

.title {
  margin-top: 16vh;
}

@media screen and (max-width: 800px) {
  .title {
    margin-top: 0;
  }
}
</style>
