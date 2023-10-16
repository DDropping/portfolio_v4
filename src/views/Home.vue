<template>
  <div class="px-10">
    <AboutPreview />
    <ProjectsCarousel />
    <SkillsList />
  </div>
</template>

<script>
import AboutPreview from "../components/aboutPreview/index.vue";
import ProjectsCarousel from "../components/carousel/index.vue";
import SkillsList from "../components/skills/index.vue";

export default {
  name: "App",
  components: { AboutPreview, ProjectsCarousel, SkillsList },
  data() {},
};
</script>

<style></style>
