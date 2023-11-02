<template>
  <div :class="$style.sticky_parent">
    <div id="sticky-samsDesigns" :class="$style.sticky">
      <div :class="$style.wrapper">
        <div :class="$style.projectDescription">
          <div>
            <h2 class="text-5xl mb-2">Sam's Designs</h2>
            <h3 class="text-2xl">
              Ecommerce site for selling shirts designed by Sam Kerrigan
            </h3>

            <br />

            <ul class="ml-10">
              <li>
                • Built an ecommerce webapp to facilitate the sale of
                merchandise designed by artist Sam Kerrigan.
              </li>
              <li>
                • Utilized React and Gatsby to develop the front end and
                integrated Contentful's headless CMS to easily facilitate the
                management of site merchandise.
              </li>
              <li>
                • Integrated Stripe's APIs to power online payment processing.
              </li>
            </ul>

            <br />

            <div>
              <h3 class="text-2xl">Technologies used:</h3>
              <ul>
                <grid :class="$style.gridLayout">
                  <li>• Javascript</li>
                  <li>• Node</li>
                  <li>• React</li>
                  <li>• Gatsby</li>
                  <li>• Redux</li>
                  <li>• Stripe</li>
                  <li>• Ant Design</li>
                  <li>• Contentful</li>
                </grid>
              </ul>
            </div>

            <br />

            <SlidingButton class="mr-14">
              <s> Visit Website </s>
            </SlidingButton>
            <SlidingButton>
              <a
                href="https://github.com/DDropping/SamsDesigns"
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
          <img
            :src="img2"
            width="700"
            id="img2-samsDesigns"
            :class="$style.img2"
          />
          <img
            :src="img4"
            width="500"
            id="img4-samsDesigns"
            :class="$style.img4"
          />
          <img
            :src="img5"
            width="400"
            id="img5-samsDesigns"
            :class="$style.img5"
          />
          <img
            :src="img1"
            width="700"
            id="img1-samsDesigns"
            :class="$style.img1"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import img1 from "../../../assets/images/samsdesigns/samsdesigns-home.png";
import img5 from "../../../assets/images/samsdesigns/samsdesigns-addtobag.png";
import img4 from "../../../assets/images/samsdesigns/samsdesigns-cart.png";
import img2 from "../../../assets/images/samsdesigns/samsdesigns-item.png";
import multiDeviceImage from "../../../assets/images/project-samsDesigns.png";
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
      var element = document.getElementById("sticky-samsDesigns");

      var element = document.getElementById("sticky-samsDesigns");
      var a = element.getBoundingClientRect().top;
      if (a === 0) {
        this.updateElementPosition("img1-samsDesigns", 0.8);
        this.updateElementPosition("img2-samsDesigns", 0.6);
        this.updateElementPosition("img4-samsDesigns", 1);
        this.updateElementPosition("img5-samsDesigns", 0.8);
      }
    },
    updateElementPosition(id, speed) {
      var stickyElement = document.getElementById("sticky-samsDesigns");
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
