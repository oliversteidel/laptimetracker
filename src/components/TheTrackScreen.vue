<template>
  <div class="container">
    <TheHeader />
    <TrackName :selectedTrack="selectedTrack" />
    <div class="btn-container flex jc-sb">
      <BtnNewTime />
      <BtnHome />
    </div>
    <InputNewTime />
  </div>
</template>

<script>
import TheHeader from "./TheHeader.vue";
import TrackName from "./TrackName.vue";
import BtnNewTime from "./BtnNewTime.vue";
import BtnHome from "./BtnHome.vue";
import InputNewTime from "./InputNewTime.vue";
export default {
  name: "TheTrackScreen",
  components: { TheHeader, TrackName, BtnNewTime, BtnHome, InputNewTime },
  props: ["selectedTrack"],
};
</script>

<style lang="scss" scoped>
@import "../style/_globals.scss";
.btn-container {
  margin-top: 1rem;
}
</style> 