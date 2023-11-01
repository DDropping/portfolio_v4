<template>
  <section :class="$style.container">
    <div>
      <h1 :class="$style.name" v-motion-fade>David Dropping</h1>
      <h2 :class="$style.slogan" v-motion-fade :delay="1000">
        I build things for the web.
      </h2>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style module>
@import url("https://fonts.googleapis.com/css2?family=Oooh+Baby&display=swap");

.container {
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.name {
  font-family: "Yellowtail", cursive;
  font-size: 80px;
  text-align: center;
}

.slogan {
  text-align: center;
  font-size: 30px;
}

@media screen and (min-width: 800px) {
  .name {
    font-size: 160px;
  }

  .slogan {
    font-size: 40px;
    text-align: end;
  }
}
</style>
