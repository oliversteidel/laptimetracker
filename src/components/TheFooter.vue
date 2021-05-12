<template>
  <footer class="footer flex ai-c jc-c">
    
    <p class="footer__copyright">&#169; 2021 Oliver Steidel</p>
    
  </footer>
</template>

<script>
export default {
  name: "TheFooter",
};
</script>

<style lang="scss" scoped>
@import "../style/_globals.scss";

.footer {
  width: 100%;
  height: 5rem;
  position: absolute;
  bottom: 0;
  left: 0;
  background: $bg-color;

  &__copyright {
    color: $font-color;
    font-size: 1.5rem;
  }

  
}
</style>