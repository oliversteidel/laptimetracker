<template>
  <ul>
    <li v-for="(time, index) in times" :key="time.index">
      <div class="container flex-col border-gradient">
        <div class="container__top flex">
          <div class="position">
            <p>{{ index + 1 }}.</p>
          </div>
          <div class="car-name">
            <p>{{ time.car }}</p>
          </div>
          <div class="power-index">
            <p>{{ time.powerIndex }}</p>
          </div>
        </div>
        <div class="container__bottom flex">
          <div class="lap-time">
            <p>{{ time.laptime }}</p>
          </div>
          <div class="diff"><p>+{{ time.diffTime }}</p></div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Laptime",
  props: ["tracks", "selectedTrack"],
  computed: {
    times() {
      let arrIndex = this.tracks.findIndex(
        (el) => el.name === this.selectedTrack
      );
      return this.tracks[arrIndex].times;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../style/_globals.scss";


.container {
  width: 100%;
  height: 10rem;
  margin-top: 1rem;
  background: $bg-color;

  &__top,
  &__bottom {
    width: 100%;
    height: 50%;
  }

  &__top {
    border-bottom: 1px solid;
    border-image-slice: 1;
    border-image-source: $gradient;
  }

  .position,
  .car-name,
  .power-index,
  .lap-time,
  .diff {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    color: $font-color;
  }

  .position {
    width: 15%;
    font-size: 3rem;
  }

  .car-name {
    width: 57%;
    border-left: 1px solid;
    border-image-slice: 1;
    border-image-source: $gradient;
    
  }

  .power-index {
    width: 28%;
    border-left: 1px solid;
    border-image-slice: 1;
    border-image-source: $gradient;
    
  }

  .lap-time {
    width: 72%;
    font-size: 3rem;
  }

  .diff {
    width: 28%;
    border-left: 1px solid;
    border-image-slice: 1;
    border-image-source: $gradient;
  }
}


</style>