<template>
  <section :class="$style.container">
    <div class="overflow-x-hidden">
      <TitleHeader title="Contact" />
    </div>

    <div
      v-motion
      :initial="{
        opacity: 0,
        transition: {
          stiffness: 100,
        },
      }"
      :visible="{
        opacity: 1,
        transition: {
          stiffness: 100,
          ease: 'easeInOut',
        },
      }"
      :delay="400"
      :class="$style.content"
    >
      <div :class="$style.contactContainer">
        <ContactForm />
      </div>

      <div :class="$style.socialsContainer">
        <ul>
          <li
            :class="$style.socialIcon"
            @mouseover="handleMouseOver"
            @mouseleave="handleMouseLeave"
          >
            <a
              href="https://github.com/ddropping"
              target="_blank"
              rel="noopener"
            >
              <img :src="githubIcon" width="70" :class="$style.whiteIcon" />
              /ddropping
            </a>
          </li>
          <li
            :class="$style.socialIcon"
            @mouseover="handleMouseOver"
            @mouseleave="handleMouseLeave"
          >
            <a
              href="https://www.linkedin.com/in/ddropping/"
              target="_blank"
              rel="noopener"
            >
              <img :src="linkedinIcon" width="70" :class="$style.whiteIcon" />
              /ddropping
            </a>
          </li>
          <li
            :class="$style.socialIcon"
            @mouseover="handleMouseOver"
            @mouseleave="handleMouseLeave"
          >
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
  methods: {
    handleMouseOver: function (e) {
      const event = new Event("mouseOverClickableElement");
      window.dispatchEvent(event);
    },
    handleMouseLeave: function (e) {
      const event = new Event("mouseLeaveClickableElement");
      window.dispatchEvent(event);
    },
  },
};
</script>

<style module>
.content {
  padding-top: 140px;
  margin-left: 30px;
  margin-right: 30px;
}

.socialsContainer {
  width: 100%;
  z-index: 10;
  font-size: 20px;
  margin-top: 50px;
}

.socialIcon {
  cursor: pointer;
  margin-bottom: 40px;
  text-align: center;
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

@media screen and (min-width: 800px) {
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

  .socialIcon {
    cursor: pointer;
    margin-bottom: 40px;
    text-align: left;
  }

  .socialsContainer {
    max-width: 400px;
    margin-top: 0;
  }
}
</style>
