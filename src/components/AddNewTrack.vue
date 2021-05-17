<template>
  <div class="container">
    <BtnNewTrack @click.native="toggleInput" />
    <InputNewTrack v-on:add-track="emitData" id="input-new-track" />
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
      this.toggleInput();
    },
    toggleInput() {
      const inputField = document.getElementById("input-new-track");
      if (this.isInputVisible) {
        inputField.style.transform = "scale(0)";
        this.isInputVisible = false;
      }else{
        inputField.style.transform = "scale(1)";
         this.isInputVisible = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../style/_globals.scss";
.container {
  width: 100%;
}

#input-new-track {
  margin-top: 1rem;
  transition: transform .3s ease-in;
  transform-origin: top left;
  transform: scale(0);
}
</style>