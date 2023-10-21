<template>
  <swiper
    :effect="'cards'"
    :grab-cursor="true"
    :modules="modules"
    :loop="true"
    class="w-[320px]"
  >
    <swiper-slide v-for="project in projectsList" :key="project.name">
      <ProjectCard :data="project" />
    </swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";
import ProjectCard from "../carousel/ProjectCard.vue";
import ProjectData from "../../assets/data/projects";

const projectsList = [...ProjectData, ...ProjectData];

export default {
  components: {
    Swiper,
    SwiperSlide,
    ProjectCard,
  },
  setup() {
    return {
      modules: [EffectCards],
      projectsList,
    };
  },
};
</script>
<style>
.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
}
</style>
