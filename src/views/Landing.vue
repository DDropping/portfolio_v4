<template>
  <div>
    <Splash />
    <About />
    <Projects />
    <Contact />
    <FooterMessage />
  </div>
</template>

<script>
import Splash from "../components/Landing/Splash.vue";
import About from "../components/Landing/About.vue";
import Projects from "../components/Landing/Projects.vue";
import Contact from "../components/Landing/Contact.vue";
import FooterMessage from "../components/Landing/FooterMessage.vue";

export default {
  components: { Splash, About, Projects, Contact, FooterMessage },
};
</script>

<style></style>
