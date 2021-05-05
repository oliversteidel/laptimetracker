<template>
  <div class="container">
    <TheHeader />
    <TrackName :selectedTrack="selectedTrack" />
  </div>
</template>

<script>
import TheHeader from "./TheHeader.vue";
import TrackName from "./TrackName.vue";
export default {
  name: "TheTrackScreen",
  components: { TheHeader, TrackName },
  props: ["selectedTrack"],
};
</script>

<style lang="scss" scoped>
@import "../style/_globals.scss";
</style>