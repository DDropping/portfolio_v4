<template>
  <section>
    <div class="overflow-x-hidden">
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
          </WorkExperienceSection>
        </FadeInTransition>

        <FadeInTransition>
          <div :class="$style.line"></div>

          <WorkExperienceSection
            year="Mar 2021 - Acquired Aug 2021"
            company="Fetch Robotics"
            position="Software Engineer - Applications"
          >
            <p>
              <i>
                Provider of on-demand Autonomous Mobile Robots for the
                warehousing and intralogistics markets.
              </i>
            </p>

            <p :class="$style.description">
              As a software engineer at Fetch Robotics, my responsibilities
              centered around the development and maintenance of our web
              applications and cloud platform. I took charge of maintaining and
              enhancing features across various React applications, including an
              Electron application integrated with our robotic platform and a
              WebGL 2D mapping application.
            </p>
          </WorkExperienceSection>
        </FadeInTransition>

        <FadeInTransition>
          <div :class="$style.dashedLine"></div>

          <WorkExperienceSection
            year="Acquired Aug 2021 - Oct 2023"
            company="Zebra Technologies"
            position="Software Engineer"
          >
            <p>
              <i>
                Market leader in the development of technology solutions for
                data capture, mobile computing, printing, and automation.
              </i>
            </p>

            <p :class="$style.description">
              As a software engineer at Zebra Technologies, I had the privilege
              of actively contributing across an entire robotics cloud platform.
              As a member of the Applications team, my responsibilities
              encompassed not only the development and maintenance of our suite
              of web applications but also extended to providing support on our
              GoLang and Django back-end services and robotics platform. This
              hands-on experience within the cloud platform empowered me to
              architect and develop resilient software applications that played
              an indispensable role in controlling and monitoring our
              cutting-edge robotics systems.
            </p>
          </WorkExperienceSection>
        </FadeInTransition>

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

export default {
  components: {
    TitleHeader,
    WorkExperienceSection,
    FadeInTransition,
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
</style>
