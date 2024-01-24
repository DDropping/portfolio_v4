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

        <Boardrack />

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
import TitleHeader from "./Header.vue";
import WorkExperienceSection from "./WorkExperienceSection.vue";
import FadeInTransition from "../FadeInTransition.vue";
import FetchRobotics from "./experience/FetchRobotics.vue";
import ZebraTechnologies from "./experience/ZebraTechnologies.vue";
import Boardrack from "./experience/Boardrack.vue";

export default {
  components: {
    TitleHeader,
    WorkExperienceSection,
    FadeInTransition,
    FetchRobotics,
    ZebraTechnologies,
    Boardrack,
  },
  setup() {},
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
