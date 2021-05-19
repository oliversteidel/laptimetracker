<template>
  <div class="container">
    <div class="wrapper flex jc-sb">
      <BtnDelete :btnImgSrc="btnImgSrc" @click.native="toggleDeleteMode" />
      <BtnNewTrack @click.native="toggleInput" />
    </div>
    <InputNewTrack :tracks="tracks" v-on:add-track="emitTrackObject" id="input-new-track" />
    <TrackList
      :inDeleteMode="inDeleteMode"
      :tracks="tracks"      
      v-on:track-clicked="emitClickedTrack"
      id="track-list"
    />
  </div>
</template>

<script>
import BtnDelete from "./BtnDelete.vue";
import BtnNewTrack from "./BtnNewTrack";
import InputNewTrack from "./InputNewTrack";
import TrackList from "./TrackList";
export default {
  name: "TheHomeScreen",
  components: {
    BtnNewTrack,
    BtnDelete,
    InputNewTrack,
    TrackList,
  },
  props: ["tracks"],
  data() {
    return {
      trackObj: "",
      clickedTrack: "",
      isInputActive: false,
      inDeleteMode: false,
      btnImgSrc: "assets/img/icon-track-delete.svg",
    };
  },
  methods: {
    emitTrackObject(data) {
      this.trackObj = data;
      this.$emit("add-track", this.trackObj);
      this.trackObj = "";
      this.toggleInput();
    },
    emitClickedTrack(data) {
      this.clickedTrack = data;
      this.$emit("track-clicked", this.clickedTrack);
      this.clickedTrack = "";
      if(this.inDeleteMode) {
        this.inDeleteMode = false;
      }
    },
    moveTracklist(bool) {
      const laptimeEl = document.getElementById("track-list");
      if (bool) {
        laptimeEl.style.transform = "translateY(0)";
      } else {
        laptimeEl.style.transform = "translateY(-100px)";
      }
    },
    moveInput(bool) {
      const inputTime = document.getElementById("input-new-track");
      if (bool) {
        inputTime.style.transform = "scaleY(1)";
      } else {
        inputTime.style.transform = "scaleY(0)";
      }
    },
    toggleInput() {
      this.isInputActive = !this.isInputActive;
      this.moveTracklist(this.isInputActive);
      this.moveInput(this.isInputActive);
      document.getElementById("race-track").focus();
    },
    toggleDeleteMode() {
      this.inDeleteMode = !this.inDeleteMode;
      this.$emit('delete-active', this.inDeleteMode);      
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../style/_globals.scss";

.container {
  width: 100%;
  max-width: 50rem;
}

#input-new-track {
  margin-top: 1rem;
  transition: transform 0.3s ease-in;
  transform-origin: top left;
  transform: scaleY(0);
}

#track-list {
  transition: transform 0.3s ease-in;
  transform: translateY(-100px);
}
</style>