<template>
  <div class="container">
    <TrackName :selectedTrack="selectedTrack" />
    <div class="btn-container flex jc-sb">
      <BtnDelete @click.native="toggleDeleteMode" :btnImgSrc="btnImgSrc" />
      <BtnHome @click.native="$emit('back-to-home')" />
      <BtnNewTime @click.native="toggleInput" />
    </div>
    <InputNewTime v-on:add-new-time="emitNewTime" id="input-new-time" />
    <Laptime
      :tracks="tracks"
      :selectedTrack="selectedTrack"  
      :inDeleteMode="inDeleteMode"   
      v-on:delete-laptime="deleteLaptime"
      id="laptime-list"
    />
  </div>
</template>

<script>
import TrackName from "./TrackName.vue";
import BtnHome from "./BtnHome.vue";
import BtnDelete from "./BtnDelete.vue";
import BtnNewTime from "./BtnNewTime.vue";
import InputNewTime from "./InputNewTime.vue";
import Laptime from "./Laptime.vue";
export default {
  name: "TheTrackScreen",
  components: {
    TrackName,
    BtnHome,
    BtnDelete,
    BtnNewTime,
    InputNewTime,
    Laptime,
  },
  props: ["selectedTrack", "tracks"],
  data() {
    return {
      isInputActive: false,
      inDeleteMode: false,
      newTime: {},
      btnImgSrc: 'assets/img/icon-stopwatch-delete.svg'
    };
  },
  methods: {
    moveLaptime(bool) {
      const laptimeEl = document.getElementById("laptime-list");
      if (bool) {
        laptimeEl.style.transform = "translateY(0)";
      } else {
        laptimeEl.style.transform = "translateY(-280px)";
      }
    },
    moveInput(bool) {
      const inputTime = document.getElementById("input-new-time");
      if (bool) {
        inputTime.style.transform = "scaleY(1)";
      } else {
        inputTime.style.transform = "scaleY(0)";
      }
    },
    toggleInput() {
      this.isInputActive = !this.isInputActive;
      this.moveLaptime(this.isInputActive);
      this.moveInput(this.isInputActive);
      document.getElementById("car").focus();
    },

    toggleDeleteMode() {
      this.inDeleteMode = !this.inDeleteMode;
    },

    deleteLaptime(id) {
      if(this.inDeleteMode) {
        this.$emit('delete-laptime', id);
        this.inDeleteMode = false;
      }
      
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

.container {
  width: 100%;
  max-width: 50rem;  
}

.btn-container {
  margin-top: 1rem;
  
}

#input-new-time {
  transform-origin: top right;
  transform: scaleY(0);
  transition: transform 0.3s ease-in;
}

#laptime-list {
  transition: transform 0.3s ease-in;
  transform: translateY(-280px);
}
</style> 