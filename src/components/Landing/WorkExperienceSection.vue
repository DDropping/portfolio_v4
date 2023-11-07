<template>
  <div :class="$style.container">
    <h1 :class="$style.year">
      {{ year }}
    </h1>

    <h1 :class="$style.company">
      {{ company }}
    </h1>

    <h2 :class="$style.position">{{ position }}</h2>

    <p :class="$style.description">
      <slot></slot>
    </p>
  </div>
</template>

<script>
export default {
  props: ["year", "company", "position"],
};
</script>

<style module>
.container {
}

.year {
  text-align: center;
  font-size: 22px;
  color: #8a8a8a;
}
.company {
  font-size: 24px;
  text-align: center;
}

.position {
  text-align: center;
}

.description {
}
</style>
