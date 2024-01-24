<template>
  <FadeInTransition>
    <div :class="$style.line"></div>

    <WorkExperienceSection
      year="May 2019 - Feb 2021"
      company="Boardrack"
      position="Project"
    >
      <p>
        <i>
          New/used surfboard marketplace that allows users to buy from, sell to
          and chat with others locally.
        </i>
      </p>

      <p :class="$style.description">
        What began as a passion project during my time at San Francisco State
        University soon evolved into a compelling endeavor I was eager to bring
        to market. The project went through two distinct iterations, initially
        built with the MERN stack and subsequently transitioned to Next.js and
        serverless functions. Through these transformations, I created a
        comprehensive platform designed for the seamless sale and management of
        surfboards. Unfortunately, this project had to be temporarily set aside,
        but its potential remains compelling.
      </p>
    </WorkExperienceSection>
  </FadeInTransition>
</template>

<script>
import { ref } from "vue";

import FadeInTransition from "../../FadeInTransition.vue";
import WorkExperienceSection from "../WorkExperienceSection.vue";

export default {
  components: { FadeInTransition, WorkExperienceSection },
  setup() {
    const expandedState = ref(false);
    const toggleExpandedState = () => {
      expandedState.value = !expandedState.value;
      const event = new Event("mouseLeaveClickableElement");
      window.dispatchEvent(event);
    };

    return { expandedState, toggleExpandedState };
  },
};
</script>

<style module>
.description {
  text-indent: 40px;
}

.line {
  margin: 20px auto;
  width: 3px;
  height: 50px;
  background-color: #cccccc;
}

.experienceDetails h2 {
  padding-top: 16px;
  font-size: 18px;
}

.experienceDetails ul {
  padding-left: 30px;
  padding-right: 30px;
}
</style>
