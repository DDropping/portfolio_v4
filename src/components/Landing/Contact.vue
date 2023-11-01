<template>
  <section :class="$style.container">
    <TitleHeader title="Contact" />

    <div :class="$style.content">
      <div :class="$style.contactContainer">
        <ContactForm />
      </div>

      <div :class="$style.socialsContainer">
        <ul>
          <li :class="$style.socialIcon">
            <a
              href="https://github.com/ddropping"
              target="_blank"
              rel="noopener"
            >
              <img :src="githubIcon" width="70" :class="$style.whiteIcon" />
              /ddropping
            </a>
          </li>
          <li :class="$style.socialIcon">
            <a
              href="https://www.linkedin.com/in/ddropping/"
              target="_blank"
              rel="noopener"
            >
              <img :src="linkedinIcon" width="70" :class="$style.whiteIcon" />
              /ddropping
            </a>
          </li>
          <li :class="$style.socialIcon">
            <a href="mailto:ddropping@gmail.com" target="_blank" rel="noopener">
              <img :src="emailIcon" width="70" :class="$style.whiteIcon" />
              ddropping@gmail.com
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import TitleHeader from "./Header.vue";
import ContactForm from "../contact/index.vue";
import githubIcon from "../../assets/icons/github.png";
import linkedinIcon from "../../assets/icons/linkedin.png";
import emailIcon from "../../assets/icons/email.png";

export default {
  components: {
    TitleHeader,
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
.container {
  position: relative;
  min-width: 100vw;
}

.content {
  position: relative;
  z-index: 10;
  padding-top: 140px;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
}

.contactContainer {
  max-width: 500px;
  width: 100%;
  z-index: 10;
}

.socialsContainer {
  max-width: 400px;
  width: 100%;
  z-index: 10;
  font-size: 20px;
}

.socialIcon {
  cursor: pointer;
  margin-bottom: 40px;
}

.socialIcon > a > img {
  display: inline-block;
  filter: invert(96%) sepia(3%) saturate(575%) hue-rotate(184deg)
    brightness(90%) contrast(89%);
  transition-duration: 300ms;
}

.socialIcon:hover > a > img {
  filter: invert(100%) sepia(20%) saturate(0%) hue-rotate(218deg)
    brightness(104%) contrast(102%);
}

.socialIcon > a {
  color: #6b7280;
}
</style>
