<template>
  <div class="container">
    <TheHeader />
    <AddNewTrack v-on:add-track="addTrack" />
    <TrackList :tracks="tracks" />
  </div>
</template>

<script>
import TheHeader from "./TheHeader.vue";
import AddNewTrack from "./AddNewTrack";
import TrackList from "./TrackList";
export default {
  name: "TheHomeScreen",
  components: {
    TheHeader,
    AddNewTrack,
    TrackList
  },
  data() {
    return {
      tracks: [{ name: "Mugello" }],
    };
  },
  methods: {
      addTrack(newTrack) {
          this.tracks.push(newTrack);
      }
  }
};
</script>

<style lang="scss" scoped>
@import "../style/_globals.scss";
</style>