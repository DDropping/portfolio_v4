<template>
  <div :class="$style.sticky_parent">
    <div id="sticky-boardrackv2" :class="$style.sticky">
      <div :class="$style.wrapper">
        <div :class="$style.projectDescription">
          <div>
            <h2 class="text-5xl mb-2">Boardrack v2</h2>
            <h3 class="text-2xl">
              New/used surfboard marketplace that allows users to buy from, sell
              to and chat with others locally.
            </h3>

            <br />

            <ul class="ml-10">
              <li>
                • Designed and developed a responsive user interface and direct
                messaging application utilizing Next.js, React, Redux, and
                Styled-Components.
              </li>
              <li>
                • Developed and integrated a serverless RESTful backend
                utilizing Next.js’ serverless functions and AWS S3 for all CRUD
                operations along with authentication and authorization.
              </li>
            </ul>

            <br />

            <div>
              <h3 class="text-2xl">Technologies used:</h3>
              <ul>
                <grid :class="$style.gridLayout">
                  <li>• React</li>
                  <li>• Node</li>
                  <li>• Redux</li>
                  <li>• Next.js</li>
                  <li>• Styled Components</li>
                  <li>• MongoDB</li>
                  <li>• Ant Design</li>
                  <li>• Jest</li>
                </grid>
              </ul>
            </div>

            <br />

            <SlidingButton class="mr-14">
              <a
                href="https://boardrack.dev/"
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
                href="https://github.com/DDropping/BoardRack_v2"
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
            id="img2-boardrackv2"
            :class="$style.img2"
          />
          <img
            :src="img4"
            width="500"
            id="img4-boardrackv2"
            :class="$style.img4"
          />
          <img
            :src="img5"
            width="400"
            id="img5-boardrackv2"
            :class="$style.img5"
          />
          <img
            :src="img1"
            width="700"
            id="img1-boardrackv2"
            :class="$style.img1"
          />
          <img
            :src="img3"
            width="650"
            id="img3-boardrackv2"
            :class="$style.img3"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import img1 from "../../../assets/images/boardrackv2/boardrackv2-home.png";
import img2 from "../../../assets/images/boardrackv2/boardrackv2-message.png";
import img3 from "../../../assets/images/boardrackv2/boardrackv2-post.png";
import img4 from "../../../assets/images/boardrackv2/boardrackv2-createpost.png";
import img5 from "../../../assets/images/boardrackv2/boardrackv2-account.png";
import multiDeviceImage from "../../../assets/images/project-boardrackv2.png";
import SlidingButton from "../../SlidingButton.vue";
import externalLinkIcon from "../../../assets/icons/link.png";

export default {
  components: { SlidingButton },
  setup() {
    const handleShowMore = () => {};

    return {
      img1,
      img2,
      img3,
      img4,
      img5,
      multiDeviceImage,
      handleShowMore,
      externalLinkIcon,
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
      var element = document.getElementById("sticky-boardrackv2");

      var element = document.getElementById("sticky-boardrackv2");
      var a = element.getBoundingClientRect().top;
      if (a === 0) {
        this.updateElementPosition("img1-boardrackv2", 0.8);
        this.updateElementPosition("img2-boardrackv2", 0.6);
        this.updateElementPosition("img3-boardrackv2", 1);
        this.updateElementPosition("img4-boardrackv2", 1);
        this.updateElementPosition("img5-boardrackv2", 0.8);
      }
    },
    updateElementPosition(id, speed) {
      var stickyElement = document.getElementById("sticky-boardrackv2");
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
    height: 4000px;
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
  .img3 {
    margin-top: calc(25vh + 2400px);
    margin-left: 100px;
    position: absolute;
  }
  .img4 {
    margin-top: calc(25vh + 600px);
    margin-left: 600px;
    position: absolute;
  }
  .img5 {
    margin-top: calc(25vh + 1000px);
    margin-left: 80px;
    position: absolute;
  }
}
</style>
