<template>
  <div>
    <Splash />
    <About />
    <WorkExperience />
    <Projects />
    <Contact />
    <FooterMessage />
  </div>
</template>

<script>
import Splash from "../components/Landing/Splash.vue";
import About from "../components/Landing/About.vue";
import WorkExperience from "../components/Landing/WorkExperience.vue";
import Projects from "../components/Landing/Projects.vue";
import Contact from "../components/Landing/Contact.vue";
import FooterMessage from "../components/Landing/FooterMessage.vue";

export default {
  components: {
    Splash,
    About,
    WorkExperience,
    Projects,
    Contact,
    FooterMessage,
  },
};
</script>

<style></style>
