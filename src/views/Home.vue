<template>
  <div class="px-10">
    <AboutPreview />
    <div>
      <h2 class="text-center text-2xl mt-10">Recent Projects</h2>
      <div class="hidden md:block">
        <ProjectsCarousel />
      </div>
      <div class="block md:hidden">
        <ProjectsCardStack />
      </div>
    </div>
    <SkillsList />
  </div>
</template>

<script>
import AboutPreview from "../components/aboutPreview/index.vue";
import ProjectsCarousel from "../components/carousel/index.vue";
import ProjectsCardStack from "../components/cardStack/index.vue";
import SkillsList from "../components/skills/index.vue";

export default {
  name: "App",
  components: { AboutPreview, ProjectsCarousel, SkillsList, ProjectsCardStack },
  data() {},
};
</script>

<style></style>
