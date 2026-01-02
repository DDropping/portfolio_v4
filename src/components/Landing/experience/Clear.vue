<template>
  <FadeInTransition>
    <div :class="$style.line"></div>

    <WorkExperienceSection
      year="Feb 2022 - Present"
      company="CLEAR"
      position="Software Engineer II"
    >
      <p>
        <i>
          Universal identity provider and leader in digital and biometric
          identification.
        </i>
      </p>

      <p :class="$style.description">
        As a software engineer at CLEAR, I contributed to building and scaling
        enrollment and verification experiences across web and kiosk platforms.
        I helped launch the Clear Plus Pre-Enroll web application, driving over
        50% of new subscriptions, and owned features end to end in collaboration
        with design, backend, data, and product teams. My work included leading
        Stripe integration, improving application reliability through
        state-machine–driven flows, shipping reusable components in CLEAR’s
        design system, and optimizing enrollment and verification workflows
        within the Electron-based WebKiosk application.
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
