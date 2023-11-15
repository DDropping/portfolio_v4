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

      <SlidingButton v-if="!expandedState" @click="toggleExpandedState()">
        Show More
        <img :src="arrowDown" width="16" class="inline-block mb-1" />
      </SlidingButton>

      <div v-if="expandedState" :class="$style.experienceDetails">
        <br />

        <h2>Key Achievements</h2>
        <ul>
          <li>
            • Developed and maintained React web applications across a robotics
            cloud platform.
          </li>
          <li>
            • Championed an initiative to enhance developer experience by
            migrating our React-based robot tasking application to more
            efficient libraries and frameworks.
          </li>
          <li>
            • Enhanced organizational awareness of critical issues by leading an
            initiative to generate daily reports that were adopted across the
            organization.
          </li>
        </ul>

        <SlidingButton v-if="expandedState" @click="toggleExpandedState()">
          Show Less
          <img :src="arrowDown" width="16" class="inline-block mb-1" />
        </SlidingButton>
      </div>
    </WorkExperienceSection>
  </FadeInTransition>
</template>

<script>
import { ref } from "vue";

import FadeInTransition from "../../FadeInTransition.vue";
import WorkExperienceSection from "../WorkExperienceSection.vue";
import SlidingButton from "../../SlidingButton.vue";

export default {
  components: { FadeInTransition, WorkExperienceSection, SlidingButton },
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
  font-size: 20px;
}

.experienceDetails ul {
  padding-left: 30px;
  padding-right: 30px;
}
</style>
