<template>
  <div class="max-w-7xl mx-auto">
    <div class="flex">
      <div class="max-w-2xl w-full">
        <img :src="data.imgSrc" />
      </div>

      <div>
        <h1 class="font-bold text-xl">{{ data.name }}</h1>
        <div>
          <a
            href="#"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-800 rounded-lg hover:bg-gray-600 focus:ring-4 focus:outline-none"
          >
            GitHub
          </a>
          <a
            href="#"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-800 rounded-lg hover:bg-gray-600 focus:ring-4 focus:outline-none"
          >
            Website
          </a>
        </div>
        <p class="text-md">{{ data.description }}</p>
      </div>
    </div>

    <ul>
      <li
        v-for="project in projectsData"
        :key="project.name"
        class="max-w-[250px] text-white inline-block m-2"
      >
        <ProjectCard :data="project" />
      </li>
    </ul>
  </div>
</template>

<script>
import projectsData from "../assets/data/projects";
import ProjectCard from "../components/carousel/ProjectCard.vue";

const data = projectsData[0];

export default {
  components: {
    ProjectCard,
  },
  setup() {
    return { projectsData, data };
  },
};
</script>

<style></style>
