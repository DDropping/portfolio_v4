<template>
  <swiper
    :effect="'coverflow'"
    :grab-cursor="true"
    :centered-slides="true"
    :slides-per-view="'3'"
    :loop="true"
    :autoplay="{
      delay: 1000,
      disableOnInteraction: false,
    }"
    :speed="3000"
    :coverflow-effect="{
      rotate: 20,
      stretch: 0,
      depth: 200,
      modifier: 1,
      slideShadows: true,
    }"
    :pagination="true"
    :navigation="true"
    :modules="modules"
    :watch-slides-progress="true"
    class="max-w-7xl"
    @mouseover="pauseAutoplay"
    @mouseleave="resumeAutoplay"
    @swiper="getRef"
  >
    <swiper-slide v-for="project in projectsList" :key="project.name">
      <ProjectCard :data="project" />
    </swiper-slide>
  </swiper>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { ref } from "vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";

import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import {
  EffectCoverflow,
  Autoplay,
  Pagination,
  Navigation,
} from "swiper/modules";
import ProjectData from "../../assets/data/projects";
import ProjectCard from "./ProjectCard.vue";

const projectsList = [...ProjectData, ...ProjectData];

const swiper = ref(null);
function getRef(swiperInstance) {
  swiper.value = swiperInstance;
}

function pauseAutoplay() {
  swiper.value.autoplay.stop();
}

function resumeAutoplay() {
  swiper.value.autoplay.start();
}

export default {
  components: {
    Swiper,
    SwiperSlide,
    ProjectCard,
  },
  setup() {
    return {
      modules: [EffectCoverflow, Pagination, Navigation, Autoplay],
      projectsList,
      pauseAutoplay,
      resumeAutoplay,
      getRef,
    };
  },
};
</script>

<style module>
.swiper {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
}

.swiper-slide img {
  display: block;
  width: 100%;
}

.swiper-slide {
  /* opacity: 0;
  transition: opacity 2s linear; */
}

.swiper-slide-visible {
  /* opacity: 1;
  transition: opacity 2s linear; */
}
</style>
