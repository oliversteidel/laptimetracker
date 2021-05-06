<template>
  <div class="container">
    <AddNewTrack v-on:add-track="emitTrackObject" />
    <TrackList :tracks="tracks" v-on:track-clicked="emitClickedTrack" />
  </div>
</template>

<script>
import AddNewTrack from "./AddNewTrack";
import TrackList from "./TrackList";
export default {
  name: "TheHomeScreen",
  components: {
    AddNewTrack,
    TrackList,
  },
  props: ["tracks"],
  data() {
    return {
      trackObj: "",
      clickedTrack: "",
    };
  },
  methods: {
    emitTrackObject(data) {
      this.trackObj = data;
      this.$emit("add-track", this.trackObj);
      this.trackObj = "";
    },
    emitClickedTrack(data) {
      this.clickedTrack = data;
      this.$emit("track-clicked", this.clickedTrack);
      this.clickedTrack = "";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../style/_globals.scss";
</style>