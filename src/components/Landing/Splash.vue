<template>
  <section :class="$style.container">
    <div>
      <h1 :class="$style.name">David Dropping</h1>
      <h2 :class="$style.slogan">I build things for the web.</h2>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style module>
@import url("https://fonts.googleapis.com/css2?family=Oooh+Baby&display=swap");
.container {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.name {
  font-family: "Yellowtail", cursive;
  font-size: 160px;
  text-align: center;
}

.slogan {
  text-align: end;
  font-size: 40px;
}
</style>
