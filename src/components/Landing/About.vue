<template>
  <section :class="$style.container">
    <TitleHeader title="About" />

    <div :class="$style.content">
      <p :class="$style.aboutPreview">
        Hey there! I'm David, and if you'd like to learn a little about me, let
        me sum it up with three things I love: traveling, the outdoors, and
        building things that live on the internet.
      </p>
      <SlidingButton
        :class="[
          { [$style.visible]: !isExpanded, [$style.hidden]: isExpanded },
        ]"
        @click="toggleExpanded"
      >
        Show More
      </SlidingButton>

      <div
        :class="[
          {
            [$style.expandedContent]: isExpanded,
            [$style.hidden]: !isExpanded,
          },
        ]"
      >
        <div>
          <br />
          <p>
            I could go on and on about the first two but lets key in on the
            latter. My interest in software engineering and web development
            started back in 2018 when I picked up my first book on html and css.
            Little did I know that would strike the beginning of a life long
            passion.
          </p>
          <br />

          <p>
            Fast-forward to today, and I've had the privilege of working at a
            start-up and a large corporation over the past couple years; honing
            my skills in designing, architecting, and developing digital
            experiences that make people's lives easier.
          </p>
          <br />

          <div>
            <div>
              <p>
                Some of the technologies I've been able to sink my teeth into
                over the years are:
              </p>
              <br />
              <ul>
                <grid :class="$style.gridLayout">
                  <li>• JavaScript / TypeScript (ES5+)</li>
                  <li>• React</li>
                  <li>• Python</li>
                  <li>• Vue</li>
                  <li>• Node</li>
                  <li>• Express</li>
                </grid>
              </ul>
            </div>
          </div>
          <br />
          <SlidingButton @click="toggleExpanded"> Show Less </SlidingButton>
        </div>

        <div :class="$style.profile">
          <img src="../../assets/profile.png" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TitleHeader from "./Header.vue";
import SlidingButton from "../SlidingButton.vue";
import { ref } from "vue";

export default {
  components: {
    TitleHeader,
    SlidingButton,
  },
  setup() {
    const isExpanded = ref(false);
    const toggleExpanded = () => {
      isExpanded.value = !isExpanded.value;
    };

    return { isExpanded, toggleExpanded };
  },
};
</script>

<style module>
.container {
  position: relative;
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
}

.content {
  z-index: 10;
  max-width: 1000px;
  margin: 0 auto;
  padding-top: 140px;
}

.visible {
  display: block;
}

.hidden {
  display: none;
}

.aboutPreview {
  font-size: 30px;
  transition-duration: 300ms;
  z-index: 10;
}

.expandedContent {
  display: flex;
}

.profile {
  max-width: 300px;
  padding: 20px;
  width: 100%;
}

.gridLayout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-left: 20px;
}
</style>
