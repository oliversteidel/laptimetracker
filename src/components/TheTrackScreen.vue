<template>
  <div class="container">
    <TrackName :selectedTrack="selectedTrack" />
    <div class="btn-container flex jc-sb">
      <BtnNewTime @click.native="toggleInput" />
      <BtnHome @click.native="$emit('back-to-home')" />
    </div>
    <transition name="scale">
      <InputNewTime v-if="isInputActive" v-on:add-new-time="emitNewTime" />
    </transition>
    <Laptime :tracks="tracks" :selectedTrack="selectedTrack" />
  </div>
</template>

<script>
import TrackName from "./TrackName.vue";
import BtnNewTime from "./BtnNewTime.vue";
import BtnHome from "./BtnHome.vue";
import InputNewTime from "./InputNewTime.vue";
import Laptime from "./Laptime.vue";
export default {
  name: "TheTrackScreen",
  components: { TrackName, BtnNewTime, BtnHome, InputNewTime, Laptime },
  props: ["selectedTrack", "tracks"],
  data() {
    return {
      isInputActive: false,
      newTime: {},

    };
  },
  methods: {
    toggleInput() {
      this.isInputActive = !this.isInputActive;
    },
    emitNewTime(data) {
      this.newTime = data;
      this.$emit("add-new-time", this.newTime);
      this.newTime = {};
      this.toggleInput();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../style/_globals.scss";
.btn-container {
  margin-top: 1rem;
}

.scale-enter-active,
.scale-leave-active {
  transition: transform 0.3s ease-in;
  transform-origin: top left;
}
.scale-enter,
.scale-leave-to {
  transform: scale(0);
}
</style> 