<template>
  <div id="app" class="bg-home" :class="{ 'bg-track': !isAtHomeScreen }">
    <TheHeader />
    <transition name="fade">
      <TheHomeScreen
        v-if="isAtHomeScreen"
        v-on:add-track="addTrack"
        v-on:track-clicked="showTrackScreen"
        :tracks="tracks"
      />
    </transition>
    <transition name="fade">
      <TheTrackScreen
        v-if="!isAtHomeScreen"
        :selectedTrack="selectedTrack"
        v-on:back-to-home="showHomeScreen"
        v-on:add-new-time="addTime"
      />
    </transition>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader";
import TheHomeScreen from "./components/TheHomeScreen";
import TheTrackScreen from "./components/TheTrackScreen";
export default {
  name: "App",
  components: {
    TheHeader,
    TheHomeScreen,
    TheTrackScreen,
  },
  data() {
    return {
      isAtHomeScreen: true,
      selectedTrack: "",
      tracks: [
        {
          name: "Mugello",
          times: [{ car: "Porsche", powerIndex: "653", laptime: "" }],
        },
      ],
      bgHome: "bg-home",
      bgTrack: "bg-track",
    };
  },
  methods: {
    addTrack(newTrack) {
      this.tracks.push(newTrack);
    },
    addTime(newTime) {
      this.tracks.forEach(el => {
        if(el.name === this.selectedTrack) {
          el.times.push(newTime)
        }
      })
    },

    showTrackScreen(trackName) {
      this.selectedTrack = trackName;
      this.isAtHomeScreen = false;
    },
    showHomeScreen() {
      this.isAtHomeScreen = true;
      this.selectedTrack = "";
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
  background-color: hsl(203, 30%, 10%);
  transition: background-image 0.25s linear;
}

.bg-home {
  background-image: url("./assets/img/bg-home.jpg");
  
}

.bg-track {
  background-image: url("./assets/img/bg-track.jpg");
  background-position: 85% !important;
}

.fade-enter-active {
  transition: opacity 0.25s ease-in;
  transition-delay: 0.5s;
}

.fade-leave-active {
  transition: opacity 0.25s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
