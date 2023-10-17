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
    :on-progress="
      function (s, progress) {
        for (var a = 0; a < s.slides.length; a++) {
          var slide = s.slides.eq(a);
          var slideProgress = slide[0].progress;
          var slideOpacity = 2 - Math.abs(slideProgress);
          slideOpacity = Math.min(Math.max(slideOpacity, 0), 1);
          slide[0].style.opacity = slideOpacity;
        }
      }
    "
    class="max-w-7xl"
    @mouseover="pauseAutoplay"
    @mouseleave="resumeAutoplay"
    @swiper="getRef"
  >
    <swiper-slide v-for="project in ProjectData" :key="project.name">
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
      ProjectData,
      pauseAutoplay,
      resumeAutoplay,
      getRef,
    };
  },
};
</script>

<style>
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
</style>
