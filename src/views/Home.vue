<template>
  <AboutPreview />
  <ProjectsCarousel />
</template>

<script>
import AboutPreview from "../components/aboutPreview/index.vue";
import ProjectsCarousel from "../components/carousel/index.vue";

export default {
  name: "App",
  components: { AboutPreview, ProjectsCarousel },
  data() {},
};
</script>

<style></style>
