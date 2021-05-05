<template>
  <div id="app">
    <TheHomeScreen v-if="isAtHomeScreen" v-on:add-track="addTrack" :tracks="tracks" />
    <TheTrackScreen v-if="!isAtHomeScreen" />
    
    
  </div>
</template>

<script>
import TheHomeScreen from "./components/TheHomeScreen";
import TheTrackScreen from "./components/TheTrackScreen";
export default {
  name: "App",
  components: {
    TheHomeScreen,
    TheTrackScreen
  },
  data() {
    return {
      isAtHomeScreen: true,
      tracks: [{ name: "Mugello" }],
    }
  },
  methods: {
      addTrack(newTrack) {
          this.tracks.push(newTrack);
      }
  }
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
