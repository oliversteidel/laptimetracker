<template>
  <div id="app" :class="[isAtHomeScreen ? bgHome : bgTrack]">
    <transition name="fade">
      <TheHomeScreen
        v-if="isAtHomeScreen"
        v-on:add-track="addTrack"
        v-on:track-clicked="showTrackScreen"
        :tracks="tracks"
      />
    </transition>
    <transition name="fade">
      <TheTrackScreen v-if="!isAtHomeScreen" :selectedTrack="selectedTrack" />
    </transition>
  </div>
</template>

<script>
import TheHomeScreen from "./components/TheHomeScreen";
import TheTrackScreen from "./components/TheTrackScreen";
export default {
  name: "App",
  components: {
    TheHomeScreen,
    TheTrackScreen,
  },
  data() {
    return {
      isAtHomeScreen: true,
      selectedTrack: "",
      tracks: [{ name: "Mugello" }],
      bgHome: "bg-home",
      bgTrack: "bg-track",
    };
  },
  methods: {
    addTrack(newTrack) {
      this.tracks.push(newTrack);
    },
    // setSelectedTrack(arg) {
    //   this.selectedTrack = arg;
    // },
    showTrackScreen(trackName) {
      this.selectedTrack = trackName;
      //this.setSelectedTrack(trackName);
      this.isAtHomeScreen = false;
    },
  },
};
</script>

<style lang="scss">
@import "./style/_globals.scss";

#app {
  min-height: 100vh;
  padding: 7rem 1rem;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
}

.bg-home {
  background-image: url("./assets/img/bg-home.jpg");
}

.bg-track {
  background-image: url("./assets/img/bg-track.jpg");
  background-position: 85% !important;
}

.fade-enter-active {
  transition: opacity 0.5s ease-in;
  transition-delay: 0.5s;
}

.fade-leave-active {
  transition: opacity 0.5s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
