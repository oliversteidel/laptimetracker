<template>
  <div class="container flex">
    <BtnNewTrack @click.native="toggleInput" />
    <transition name="scale">
      <InputNewTrack v-if="isInputVisible" v-on:add-track="emitData" />
    </transition>
  </div>
</template>

<script>
import BtnNewTrack from "./BtnNewTrack";
import InputNewTrack from "./InputNewTrack";

export default {
  name: "AddNewTrack",
  components: {
    BtnNewTrack,
    InputNewTrack,
  },
  data() {
    return {
      trackObj: "",
      isInputVisible: false,
    };
  },
  methods: {
    emitData(data) {
      this.trackObj = data;
      this.$emit("add-track", this.trackObj);
      this.trackObj = "";
    },
    toggleInput() {
      this.isInputVisible = !this.isInputVisible;      
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../style/_globals.scss";
.container {
  width: 100%;
}

.scale-enter-active, .scale-leave-active {
    transition: transform .25s ease-in;
    transform-origin: left;
}

.scale-enter, .scale-leave-to {
    transform: scaleX(0);
    
    
}
</style>