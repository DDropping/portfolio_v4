<template>
  <div class="flex justify-evenly my-[120px] px-10">
    <div class="w-[500px]">
      <ContactForm />
    </div>

    <div
      class="text-lg text-white text-opacity-50 flex flex-col justify-evenly"
    >
      <div class="text-4xl text-white text-opacity-20 italic">
        <div class="text-center">Be The Reason Someone</div>
        <div class="text-center">Smiles Today...</div>
      </div>

      <ul class="flex justify-around mt-10">
        <li>
          <a> <img :src="githubIcon" width="80" :class="$style.whiteIcon" /></a>
        </li>
        <li>
          <a>
            <img :src="linkedinIcon" width="80" :class="$style.whiteIcon"
          /></a>
        </li>
        <li>
          <a> <img :src="emailIcon" width="80" :class="$style.whiteIcon" /></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import githubIcon from "../../assets/icons/github.png";
import linkedinIcon from "../../assets/icons/linkedin.png";
import emailIcon from "../../assets/icons/email.png";
import ContactForm from "../contact/index.vue";

export default {
  components: {
    ContactForm,
  },
  setup() {
    return {
      githubIcon,
      linkedinIcon,
      emailIcon,
    };
  },
};
</script>

<style module>
.whiteIcon {
  filter: invert(96%) sepia(3%) saturate(575%) hue-rotate(184deg)
    brightness(90%) contrast(89%);
  cursor: pointer;
  transition-duration: 300ms;
}
.whiteIcon:hover {
  filter: invert(100%) sepia(20%) saturate(0%) hue-rotate(218deg)
    brightness(104%) contrast(102%);
}
</style>
