<template>
  <div class="container">
    <div class="input-field flex-col jc-c border-gradient">
      <label for="race-track">Racetrack</label>
      <input
        type="text"
        name="race-track"
        id="race-track"
        class="border-gradient"
        placeholder="add new race track"
        @keyup.enter="addTrackName"
        v-model="trackName"
      />
    </div>
    <div class="tooltip border-gradient flex jc-c" v-if="tooltipActive">
      <p class="tooltip-text">
        This track already exists! Please choose another one.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "InputNewTrack",
  props: ["tracks"],
  data() {
    return {
      trackName: "",
      tooltipActive: false,
    };
  },
  methods: {
    nameAlreadyExists(str) {
      return this.tracks.some((el) => el.name === str);
    },

    addTrackName() {
      const inputTrackName = document.getElementById("race-track");
      if (this.nameAlreadyExists(inputTrackName.value)) {
        this.tooltipActive = true;
        return;
        
      } else if (inputTrackName.value) {
        this.tooltipActive = false;
        const newTrack = {
          name: this.trackName,
          times: [],
        };

        this.$emit("add-track", newTrack);

        this.trackName = "";
      }
    },
  },
  mounted() {
    document.getElementById("race-track").focus();
  },
};
</script>

<style lang="scss" scoped>
@import "../style/_globals.scss";
.input-field {
  height: 10rem;
  background: $bg-color;
  padding: 1rem;
}

.tooltip {
  background: hsla(4, 100%, 10%, 0.8);
  padding: 0.5rem;

  &-text {
    font-size: 1.5rem;
    color: $font-color;
  }
}
</style>