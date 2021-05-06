<template>
  <div class="container flex-col jc-sb border-gradient">
    <div class="car-index-container flex jc-sb">
      <div class="car-container flex-col">
        <label for="car">Car</label>
        <input
          type="text"
          name="car"
          id="car"
          class="border-gradient"
          required
          v-on:keyup="checkInputComplete"
        />
      </div>
      <div class="index-container flex-col">
        <label for="index">Index</label>
        <input type="text" name="index" id="index" class="border-gradient" />
      </div>
    </div>
    <div class="laptime-submit-container flex jc-sb">
      <div class="laptime-container flex-col">
        <label for="laptime">Laptime</label>
        <input
          type="text"
          name="laptime"
          id="laptime"
          class="border-gradient"
          required
          v-on:keyup="checkInputComplete"
        />
      </div>
      <div class="submit-container flex-col">
        <div
          class="submit-btn border-gradient flex ai-c jc-c"
          :class="[isComplete ? bgGreen : bgRed]"
          @click="addTime"
        >
          Add Time
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InputNewTime",
  data() {
    return {
      isComplete: false,
      bgRed: "submit-btn--red",
      bgGreen: "submit-btn--green",
      newTime: { car: "", powerIndex: "", laptime: ""}
    }
  },
  methods: {
      checkInputComplete() {
          if(this.isComplete) {
              return              
          }

          const inputCar = document.getElementById('car');          
          const inputLaptime = document.getElementById('laptime');

          if(inputCar.value && inputLaptime.value) {
              this.isComplete = true;
          }
      },
      addTime() {
          const inputCar = document.getElementById('car');
          const inputIndex = document.getElementById('index');
          const inputLaptime = document.getElementById('laptime');

          if(inputCar.value && inputLaptime.value) {
              this.newTime.car = inputCar.value;
              this.newTime.powerIndex = inputIndex.value;
              this.newTime.laptime = inputLaptime.value;
          }

          this.$emit('add-new-time', this.newTime);
          
          inputCar.value = "";
          inputIndex.value = "";
          inputLaptime.value = "";
          this.isComplete = false;
      }
  }
};
</script>

<style lang="scss" scoped>
@import "../style/_globals.scss";

.container {
  height: 18rem;
  background: $bg-color;
  padding: 1rem;
  margin-top: 1rem;

  .car-container,
  .laptime-container {
    width: 70%;
  }

  .index-container,
  .submit-container {
    width: 25%;
  }

  .submit-container {
    justify-content: flex-end;
  }

  .submit-btn {
    height: 3.5rem;
    font-size: 1.6rem;
    color: $font-color;
    cursor: pointer;
  }

  .submit-btn--red {
    background: $red;
  }

  .submit-btn--green {
    background: $green;
  }
}
</style>