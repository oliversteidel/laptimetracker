<template>
  <header class="header flex ai-c jc-c">
    <h1 class="header__title">Lap Time Tracker</h1>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
};
</script>

<style lang="scss" scoped>
@import "../style/_globals.scss";
.header {
  width: 100%;
  height: 6rem;
  position: fixed;
  top: 0;
  left: 0;
  background: hsl(203, 30%, 10%);  
  z-index: 100;

  &__title {
    font-family: "Racing Sans One", cursive;
    font-size: 10vw;
    background: $gradient;
    background-clip: text;
    -webkit-text-fill-color: transparent;

    @include breakpoint-up($br-small) {
      font-size: 4rem;
    }
  }
}
</style>