<template>
  <section class="overflow-x-hidden relative">
    <div class="overflow-hidden">
      <TitleHeader id="workExperienceSection" title="My Journey" />

      <div :class="$style.content">
        <FadeInTransition>
          <WorkExperienceSection
            year="Class of 2020"
            company="Bachelors of Science in Computer Science"
            position="San Francisco State University"
          >
            <p></p>
          </WorkExperienceSection>
        </FadeInTransition>

        <FadeInTransition>
          <div :class="$style.line"></div>

          <WorkExperienceSection
            year="May 2019 - Feb 2021"
            company="BoardRack"
            position="Project"
          >
            <p>
              <i>
                New/used surfboard marketplace that allows users to buy from,
                sell to and chat with others locally.
              </i>
            </p>

            <p :class="$style.description">
              What began as a passion project during my time at San Francisco
              State University soon evolved into a compelling endeavor I was
              eager to bring to market. The project went through two distinct
              iterations, initially built with the MERN stack and subsequently
              transitioned to Next.js and serverless functions. Through these
              transformations, I created a comprehensive platform designed for
              the seamless sale and management of surfboards. Unfortunately,
              this project had to be temporarily set aside, but its potential
              remains compelling.
            </p>

            <SlidingButton
              v-if="expandedState !== 'boardrack'"
              @click="setExpandedState('boardrack')"
            >
              Show More
              <img :src="arrowDown" width="16" class="inline-block mb-1" />
            </SlidingButton>
          </WorkExperienceSection>
        </FadeInTransition>

        <FetchRobotics />

        <ZebraTechnologies />

        <FadeInTransition>
          <div :class="$style.line"></div>

          <div :class="$style.questionMark">?</div>
        </FadeInTransition>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
import TitleHeader from "./Header.vue";
import WorkExperienceSection from "./WorkExperienceSection.vue";
import FadeInTransition from "../FadeInTransition.vue";
import SlidingButton from "../SlidingButton.vue";
import arrowDown from "../../assets/icons/arrow-down.png";
import FetchRobotics from "./experience/fetchRobotics.vue";
import ZebraTechnologies from "./experience/ZebraTechnologies.vue";

export default {
  components: {
    TitleHeader,
    WorkExperienceSection,
    FadeInTransition,
    SlidingButton,
    FetchRobotics,
    ZebraTechnologies,
  },
  setup() {
    const expandedState = ref("");
    const setExpandedState = (value) => {
      expandedState.value = value;
      const event = new Event("mouseLeaveClickableElement");
      window.dispatchEvent(event);
    };

    return { arrowDown, expandedState, setExpandedState };
  },
};
</script>

<style module>
.container {
  margin: 0 auto;
}

.content {
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  padding: 200px 30px 0 30px;
  z-index: 10;
}

.description {
  text-indent: 40px;
}

.line {
  margin: 20px auto;
  width: 3px;
  height: 50px;
  background-color: #cccccc;
}

.dashedLine {
  height: 50px;
  border-left: 3px dotted #cccccc;
  width: 1px;
  margin: 20px auto;
}

.questionMark {
  border: 3px solid #cccccc;
  color: #cccccc;
  border-radius: 50%;
  height: 70px;
  width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  margin: 0 auto;
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
