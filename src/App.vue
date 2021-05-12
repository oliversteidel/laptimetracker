<template>
  <div
    id="app"
    class="flex-col ai-c"
    
  >
    <TheHeader />
    <transition name="fade">
      <TheHomeScreen
        v-if="isAtHomeScreen"
        v-on:add-track="addTrack"
        v-on:track-clicked="showTrackScreen"
        :tracks="tracks"
      />
    </transition>
    <transition name="fade-down">
      <TheTrackScreen
        v-if="!isAtHomeScreen"
        :selectedTrack="selectedTrack"
        :tracks="tracks"
        v-on:back-to-home="showHomeScreen"
        v-on:add-new-time="addTime"
        v-on:delete-laptime="deleteLaptime"
      />
    </transition>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader";
import TheHomeScreen from "./components/TheHomeScreen";
import TheTrackScreen from "./components/TheTrackScreen";
import TheFooter from "./components/TheFooter";
export default {
  name: "App",
  components: {
    TheHeader,
    TheHomeScreen,
    TheTrackScreen,
    TheFooter
  },
  data() {
    return {
      isAtHomeScreen: true,
      selectedTrack: "",
      tracks: [],
      
    };
  },
  methods: {
    addTrack(newTrack) {
      this.tracks.push(newTrack);
    },

    addTime(newTime) {
      this.tracks.forEach((el) => {
        if (el.name === this.selectedTrack) {
          el.times.push(Object.assign({}, newTime));
        }
      });
      this.sortLaptimes();
      this.calcTimeDiffs();
      this.saveData();
    },

    sortLaptimes() {
      this.tracks.forEach((el) => {
        el.times = el.times.sort(function (a, b) {
          let timeA = a.laptime;
          let timeB = b.laptime;
          if (timeA < timeB) return -1;
          if (timeA > timeB) return 1;
          return 0;
        });
      });
    },

    calcTimeDiffs() {
      this.tracks.forEach((el) => {
        if (el.times.length > 1) {
          let bestTime = this.convertLaptimeToMillis(el.times[0].laptime);
          el.times.forEach((item) => {
            let compareTime = this.convertLaptimeToMillis(item.laptime);
            let result = compareTime - bestTime;
            item.diffTime = this.millisToMinutesAndSeconds(result);
          });
        }
      });
    },

    convertLaptimeToMillis(str) {
      let indexOfColon = str.indexOf(":");
      let indexOfComma = str.indexOf(",");

      let min = parseInt(str.substring(0, indexOfColon));
      let sec = parseInt(str.substring(indexOfColon + 1, indexOfComma));
      let tenth = parseInt(str.substring(indexOfComma + 1));

      let minInMillis = min * 60000;
      let secInMillis = sec * 1000;

      return minInMillis + secInMillis + tenth;
    },

    millisToMinutesAndSeconds(millis) {
      var minutes = Math.floor(millis / 60000);
      var seconds = ((millis % 60000) / 1000).toFixed(3);
      return seconds == 60
        ? minutes + 1 + ":00"
        : minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    },

    deleteLaptime(id) {
      //console.log('function called:' + id);
      this.tracks.forEach((el) => {
        if (el.name === this.selectedTrack) {
          el.times = el.times.filter((time) => time.id !== id);
        }
      });
      this.sortLaptimes();
      this.calcTimeDiffs();
      this.saveData();
    },

    showTrackScreen(trackName) {
      this.selectedTrack = trackName;
      this.isAtHomeScreen = false;
    },

    showHomeScreen() {
      this.isAtHomeScreen = true;
      this.selectedTrack = "";
    },

    saveData() {
      localStorage.setItem("tracks", JSON.stringify(this.tracks));
    },

    loadData() {
      if (localStorage.getItem("tracks") === null) return;
      let retrievedData = localStorage.getItem("tracks");
      this.tracks = JSON.parse(retrievedData);
    },
  },
  mounted() {
    this.loadData();
  },
};
</script>

<style lang="scss">
@import "./style/_globals.scss";

#app {
  width: 100vw;
  min-height: 100vh;
  padding: 7rem 1rem;
  background-image: url("./assets/img/bg-img.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 60%;
  background-attachment: fixed;
  background-color: hsl(203, 30%, 10%);
  transition: background-image 0.25s linear;
}


// transition HomeScreen
.fade-enter-active {
  transition: opacity 0.25s ease-in;
  transition-delay: 0.5s;
}

.fade-leave-active {
  transition: opacity 0.25s ease-in;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

//transition TrackScreen
.fade-down-enter-active {
  transition: opacity 0.25s ease-in, transform 0.5s linear;
  transition-delay: 0.5s;
}

.fade-down-leave-active {
  transition: opacity 0.25s ease-in, transform 0.5s linear;
}

.fade-down-enter,
.fade-down-leave-to {
  transform: translateY(50px);
  opacity: 0;
}
</style>
