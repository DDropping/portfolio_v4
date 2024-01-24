<template>
  <FadeInTransition>
    <div :class="$style.line"></div>

    <WorkExperienceSection
      year="Mar 2021 - Acquired Aug 2021"
      company="Fetch Robotics"
      position="Software Engineer - Applications"
    >
      <p>
        <i>
          Provider of on-demand Autonomous Mobile Robots for the warehousing and
          intralogistics markets.
        </i>
      </p>

      <p :class="$style.description">
        As a software engineer at Fetch Robotics, my responsibilities centered
        around the development and maintenance of our web applications and cloud
        platform. I took charge of maintaining and enhancing features across
        various React applications, including an Electron application integrated
        with our robotic platform and a WebGL 2D mapping application.
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
