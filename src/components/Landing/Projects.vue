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

    <div class="flex justify-center relative z-10 mb-[200px]">
      <SlidingButton @click="handleShowMore">
        Show More Projects
      </SlidingButton>
    </div>
  </section>
</template>

<script>
import TitleHeader from "./Header.vue";
import SlidingButton from "../SlidingButton.vue";
import BoardRackv2 from "./projects/Boardrackv2.vue";
import SortVis from "./projects/SortVis.vue";

export default {
  components: {
    TitleHeader,
    SlidingButton,
    BoardRackv2,
    SortVis,
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
  margin-top: 20vh;
}
</style>
