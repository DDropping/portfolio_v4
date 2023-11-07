<template>
  <section>
    <div class="overflow-x-hidden">
      <TitleHeader id="workExperienceSection" title="My Journey" />

      <div :class="$style.content">
        <WorkExperienceSection
          year="Class of 2020"
          company="Bachelors of Science in Computer Science"
          position="San Francisco State University"
        >
          <p></p>
        </WorkExperienceSection>

        <img :src="line" width="10" :class="$style.line" />

        <WorkExperienceSection
          year="May 2019 - Feb 2021"
          company="BoardRack"
          position="Project"
        >
          <p>
            New/used surfboard marketplace that allows users to buy from, sell
            to and chat with others locally.
          </p>
        </WorkExperienceSection>
        <img :src="line" width="10" :class="$style.line" />

        <WorkExperienceSection
          year="Mar 2021 - Acquired Aug 2021"
          company="Fetch Robotics"
          position="Software Engineer"
        >
          <p>
            Provider of on-demand Autonomous Mobile Robots for the warehousing
            and intralogistics markets.
          </p>
        </WorkExperienceSection>

        <img :src="dashedLine" width="10" :class="$style.line" />

        <WorkExperienceSection
          year="Acquired Aug 2021 - Oct 2022"
          company="Zebra Technologies"
          position="Software Engineer"
        >
          <p>
            Provider of on-demand Autonomous Mobile Robots for the warehousing
            and intralogistics markets.
          </p>
        </WorkExperienceSection>

        <img :src="line" width="10" :class="$style.line" />

        <div :class="$style.questionMark">?</div>
      </div>
    </div>
  </section>
</template>

<script>
import TitleHeader from "./Header.vue";
import WorkExperienceSection from "./WorkExperienceSection.vue";
import line from "../../assets/line.png";
import dashedLine from "../../assets/line-dashed.png";

export default {
  components: {
    TitleHeader,
    WorkExperienceSection,
  },
  setup() {
    return { line, dashedLine };
  },
};
</script>

<style module>
.container {
  max-width: 800px;
  margin: 0 auto;
}

.content {
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  padding-top: 200px;
  z-index: 10;
}

.line {
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
</style>
