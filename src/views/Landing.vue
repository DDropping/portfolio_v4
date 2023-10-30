<template>
  <div>
    <Splash />
    <About />

    <Contact />
    <FooterMessage />
  </div>
</template>

<script>
import Splash from "../components/Landing/Splash.vue";
import About from "../components/Landing/About.vue";
import Contact from "../components/Landing/Contact.vue";
import FooterMessage from "../components/Landing/FooterMessage.vue";

export default {
  components: { Splash, About, Contact, FooterMessage },
};
</script>

<style></style>
