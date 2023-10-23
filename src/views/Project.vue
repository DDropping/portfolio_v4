<template>
  <div>
    <div>Project Page</div>
    <div class="hidden md:block">
      <ProjectsCarousel />
    </div>
    <div class="block md:hidden">
      <ProjectsCardStack />
    </div>
  </div>
</template>

<script>
import ProjectsCarousel from "../components/carousel/index.vue";
import ProjectsCardStack from "../components/cardStack/index.vue";

export default {
  components: {
    ProjectsCarousel,
    ProjectsCardStack,
  },
  setup() {},
};
</script>

<style></style>
