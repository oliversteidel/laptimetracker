<template>
  <div class="container">
    <TheHeader />
    <AddNewTrack v-on:add-track="emitData" />
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
  props: ["tracks"],
  data() {
    return {
      trackObj: ""
    };
  },
  methods: {
      emitData(data) {
      this.trackObj = data;
      this.$emit("add-track", this.trackObj);
      this.trackObj = "";
    },
  }
  
};
</script>

<style lang="scss" scoped>
@import "../style/_globals.scss";
</style>