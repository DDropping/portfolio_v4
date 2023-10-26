<template>
  <div>
    <Splash />
    <About />

    <Contact />
  </div>
</template>

<script>
import Splash from "../components/Landing/Splash.vue";
import About from "../components/Landing/About.vue";
import Contact from "../components/Landing/Contact.vue";

export default {
  components: { Splash, About, Contact },
};
</script>

<style></style>
