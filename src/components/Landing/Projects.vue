<template>
  <section :class="$style.container">
    <TitleHeader title="Projects" class="mt-[20vh]" />

    <div :class="$style.content">
      <BoardRackv2 />
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

export default {
  components: {
    TitleHeader,
    SlidingButton,
    BoardRackv2,
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
</style>
