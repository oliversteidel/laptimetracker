<template>
  <div id="app">
    <TheHomeScreen />
    
    
  </div>
</template>

<script>
import TheHomeScreen from "./components/TheHomeScreen";
export default {
  name: "App",
  components: {
    TheHomeScreen
  },
};
</script>

<style lang="scss">
@import "./style/_globals.scss";

#app {  
  min-height: 100vh;
  padding: 7rem 1rem;
  background-image: url("./assets/img/bg-home.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
}
</style>
