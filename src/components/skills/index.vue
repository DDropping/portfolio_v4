<template>
  <div class="mt-20">
    <ul class="flex justify-center items-center flex-wrap">
      <li
        v-for="skill in skillsList.languages"
        :key="skill.name"
        class="w-14 m-2 opacity-80 hover:opacity-100"
      >
        <img :src="skill.imgSrc" />
      </li>
    </ul>

    <ul class="flex justify-center items-center flex-wrap">
      <li
        v-for="skill in skillsList.webTechnologies"
        :key="skill.name"
        class="w-14 m-2 opacity-80 hover:opacity-100"
      >
        <img :src="skill.imgSrc" />
      </li>
    </ul>

    <ul class="flex justify-center items-center flex-wrap">
      <li
        v-for="skill in skillsList.tools"
        :key="skill.name"
        class="w-14 m-2 opacity-80 hover:opacity-100"
      >
        <img :src="skill.imgSrc" />
      </li>
    </ul>
    {{ console.log(counter) }}
  </div>
</template>

<script>
import skillsList from "../../assets/data/skills.js";

export default {
  setup() {
    return { skillsList };
  },
};
</script>
<style module>
li {
  transition: opacity cubic-bezier(0, 0.52, 1, 1) 2s;
}
</style>
