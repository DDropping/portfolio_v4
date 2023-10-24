<template>
  <div class="sticky z-10">
    <nav class="flex pr-[80px] bg-gray-800">
      <div
        class="w-12 ml-6 mr-2 flex justify-center items-center cursor-pointer"
      >
        <RouterLink to="/">
          <img src="../../assets//logo.png" />
        </RouterLink>
      </div>
      <div class="p-4 max-w-md w-full mx-auto">
        <ul class="flex justify-around">
          <li class="inline-block w-[33%] text-center">
            <RouterLink
              to="/"
              class="block py-2 pl-3 pr-4 text-white"
              @mouseover.stop="setUnderlinePosition('home')"
              @mouseleave.stop="setUnderlinePosition('current')"
            >
              Home
            </RouterLink>
          </li>
          <li class="inline-block w-[33%] text-center">
            <RouterLink
              to="/project"
              class="block py-2 pl-3 pr-4 text-white"
              @mouseover.stop="setUnderlinePosition('projects')"
              @mouseleave.stop="setUnderlinePosition('current')"
            >
              Projects
            </RouterLink>
          </li>
          <li class="inline-block w-[33%] text-center">
            <RouterLink
              to="/about"
              class="block py-2 pl-3 pr-4 text-white"
              @mouseover.stop="setUnderlinePosition('about')"
              @mouseleave.stop="setUnderlinePosition('current')"
            >
              About
            </RouterLink>
          </li>
        </ul>
        <hr
          id="sliding-underline"
          :class="{
            'underline-pos-1': underlinePosition === 'home',
            'underline-pos-2':
              underlinePosition === 'projects' ||
              underlinePosition === 'projectDetails',
            'underline-pos-3': underlinePosition === 'about',
          }"
        />
      </div>
    </nav>
    <div class="gradient w-screen h-[120px]"></div>
  </div>
</template>

<script>
import { ref, computed, watch } from "vue";
import { useRoute } from "vue-router";

export default {
  setup() {
    const route = useRoute();
    const currentRoute = computed(() => route.name);
    let underlinePosition = ref(route.name);

    const setUnderlinePosition = (page) => {
      if (page === "current") {
        underlinePosition.value = currentRoute.value;
      } else {
        underlinePosition.value = page;
      }
    };

    watch(currentRoute, () => {
      console.log(currentRoute.value);
      setUnderlinePosition(currentRoute.value);
    });

    return { underlinePosition, setUnderlinePosition };
  },
};
</script>

<style>
a {
  transition: 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

#sliding-underline {
  margin: 0;
  background: white;
  border-radius: 3px;
  border: none;
  transition: margin 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  height: 2px;
  width: 33%;
}

.underline-pos-1 {
  margin-left: 0 !important;
}
.underline-pos-2 {
  margin-left: 33% !important;
}
.underline-pos-3 {
  margin-left: 66% !important;
}

.sticky {
  position: fixed;
  top: 0;
  width: 100%;
}

.gradient {
  background-image: linear-gradient(to top, rgba(255, 0, 0, 0), #1f2937);
}
</style>
