<template>
  <footer class="footer flex ai-c jc-sb">
    <a href="https://github.com/oliversteidel"><img src="../assets/img/icon-github.svg" alt=""></a>
    
    <p class="footer__copyright">&#169; 2021 Oliver Steidel</p>

    <a href="https://www.instagram.com/os.webdev"><img src="../assets/img/icon-instagram.svg" alt=""></a>
    
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
  height: 6rem;
  position: absolute;
  bottom: 0;
  left: 0;
  background: $bg-color;
  padding: 0 1rem;

  &__copyright {
    color: $font-color;
    font-size: 1.5rem;
  }

  img {
    width: 3rem;
    height: auto;
  }

  
}
</style>