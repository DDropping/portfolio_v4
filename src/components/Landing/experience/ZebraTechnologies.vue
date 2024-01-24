<template>
  <FadeInTransition>
    <div :class="$style.line"></div>

    <WorkExperienceSection
      year="Acquired Aug 2021 - Oct 2023"
      company="Zebra Technologies"
      position="Software Engineer"
    >
      <p>
        <i>
          Market leader in the development of technology solutions for data
          capture, mobile computing, printing, and automation.
        </i>
      </p>

      <p :class="$style.description">
        As a software engineer at Zebra Technologies, I had the privilege of
        actively contributing across an entire robotics cloud platform. As a
        member of the Applications team, my responsibilities encompassed not
        only the development and maintenance of our suite of web applications
        but also extended to providing support on our GoLang and Django back-end
        services and robotics platform. This hands-on experience within the
        cloud platform empowered me to architect and develop resilient software
        applications that played an indispensable role in controlling and
        monitoring our cutting-edge robotics systems.
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
