<template>
  <div :class="$style.sticky_parent">
    <div id="sticky-sortvis" :class="$style.sticky">
      <div :class="$style.wrapper">
        <div :class="$style.projectDescription">
          <div>
            <h2 class="text-5xl mb-2">Sort Visualizer</h2>
            <h3 class="text-2xl">Animated sorting algorithm visualizer</h3>

            <br />

            <ul class="ml-10">
              <li>
                • Created a web app to provide educational information about
                sorting algorithms.
              </li>
              <li>
                • Demonstrates how sorting algorithms execute step by step.
              </li>
            </ul>

            <br />

            <div>
              <h3 class="text-2xl">Technologies used:</h3>
              <ul>
                <grid :class="$style.gridLayout">
                  <li>• Javascript</li>
                  <li>• Ant Design</li>
                  <li>• React</li>
                  <li>• Styled Components</li>
                </grid>
              </ul>
            </div>

            <br />

            <SlidingButton class="mr-14">
              <a
                href="https://654298216e1b380aed450c45--angry-bell-898fd5.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Website
                <img
                  :src="externalLinkIcon"
                  width="16"
                  class="inline-block mb-1"
                />
              </a>
            </SlidingButton>
            <SlidingButton>
              <a
                href="https://github.com/DDropping/SortingVisualizer"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Repository
                <img
                  :src="externalLinkIcon"
                  width="16"
                  class="inline-block mb-1"
                />
              </a>
            </SlidingButton>
          </div>
        </div>

        <div :class="$style.multiDeviceImage">
          <img :src="multiDeviceImage" />
        </div>

        <div :class="$style.parallaxImages">
          <img :src="img2" width="700" id="img2-sortvis" :class="$style.img2" />
          <img :src="img4" width="500" id="img4-sortvis" :class="$style.img4" />
          <img :src="img5" width="400" id="img5-sortvis" :class="$style.img5" />
          <img :src="img1" width="700" id="img1-sortvis" :class="$style.img1" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import img2 from "../../../assets/images/sortvis/sortvis-desktop-1.png";
import img4 from "../../../assets/images/sortvis/sortvis-mobile-1.png";
import img5 from "../../../assets/images/sortvis/sortvis-mobile-2.png";
import img1 from "../../../assets/images/sortvis/sortvis-desktop-2.png";
import multiDeviceImage from "../../../assets/images/project-sortVisualizer.png";
import SlidingButton from "../../SlidingButton.vue";
import externalLinkIcon from "../../../assets/icons/link.png";

export default {
  components: { SlidingButton },
  setup() {
    const handleShowMore = () => {};

    return {
      img1,
      img2,
      img4,
      img5,
      multiDeviceImage,
      externalLinkIcon,
      handleShowMore,
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll(event) {
      var element = document.getElementById("sticky-sortvis");

      var element = document.getElementById("sticky-sortvis");
      var a = element.getBoundingClientRect().top;
      if (a === 0) {
        this.updateElementPosition("img1-sortvis", 0.8);
        this.updateElementPosition("img2-sortvis", 0.6);
        this.updateElementPosition("img4-sortvis", 1);
        this.updateElementPosition("img5-sortvis", 0.8);
      }
    },
    updateElementPosition(id, speed) {
      var stickyElement = document.getElementById("sticky-sortvis");
      var element = document.getElementById(id);
      const offset =
        stickyElement.offsetTop - document.documentElement.scrollTop;

      var scrollDistance = document.documentElement.scrollTop;
      const value = (scrollDistance + offset) * speed;

      element.style.transform = "translateY(-" + value + "px)";
    },
  },
};
</script>

<style module>
.parallaxImages {
  display: none;
}

.multiDeviceImage {
  display: block;
}

.gridLayout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-left: 20px;
}

.projectDescription {
  margin-top: 150px;
  margin-left: 30px;
  margin-right: 30px;
}

@media screen and (min-width: 800px) {
  .wrapper {
    display: flex;
    width: 100vw;
  }
  .multiDeviceImage {
    display: none;
  }

  .parallaxImages {
    display: block;
  }

  .sticky_parent {
    height: 3000px;
  }

  .sticky {
    overflow: hidden;
    position: sticky;
    top: 0px;
    height: 100vh;
  }

  .projectDescription {
    margin: 0 0 0 100px;
    width: 800px;
    height: 100vh;
    display: flex;
    align-items: center;
  }

  .img1 {
    margin-top: 25vh;
    margin-left: 0px;
    position: absolute;
  }
  .img2 {
    margin-top: calc(25vh + 1000px);
    margin-left: 500px;
    position: absolute;
  }

  .img4 {
    margin-top: calc(25vh + 600px);
    margin-left: 600px;
    position: absolute;
  }
  .img5 {
    margin-top: calc(25vh + 800px);
    margin-left: 80px;
    position: absolute;
  }
}
</style>
