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
          placeholder="Porsche GT3 RS"
        />
      </div>
      <div class="index-container flex-col">
        <label for="index">Index</label>
        <input type="text" name="index" id="index" class="border-gradient" placeholder="A700" />
      </div>
    </div>
    <div class="laptime-container flex-col">
        <label for="laptime">Laptime</label>
        <input
          type="text"
          name="laptime"
          id="laptime"
          class="border-gradient"
          required
          v-on:keyup="[checkInputComplete(), formatLaptimeInput($event)]"
          placeholder="00:00,000"
          maxlength="9"
        />
      </div>
    <div class="setup-submit-container flex jc-sb">
      <div class="setup-container flex-col">
        <label for="setup">Setup-Info</label>
        <input
          type="text"
          name="setup"
          id="setup"
          class="border-gradient"                    
          placeholder="z.B max-downforce"
        />
      </div>
      
      <div class="submit-container flex-col">
        <button
          type="submit"
          class="submit-btn border-gradient flex ai-c jc-c"
          :class="[isComplete ? bgGreen : bgRed]"
          @click="addTime"
        >
          Add Time
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
export default {
  name: "InputNewTime",
  data() {
    return {
      isComplete: false,
      bgRed: "submit-btn--red",
      bgGreen: "submit-btn--green",
      newTime: {id: "", car: "", powerIndex: "", laptime: "", diffTime: "", setup: "" },
    };
  },
  methods: {
    checkInputComplete() {
      if (this.isComplete) {
        return;
      }

      const inputCar = document.getElementById("car");
      const inputLaptime = document.getElementById("laptime");

      if (inputCar.value && inputLaptime.value) {
        this.isComplete = true;
      }
    },
    addTime() {
      if (this.isComplete) {
        const inputCar = document.getElementById("car");
        const inputIndex = document.getElementById("index");
        const inputLaptime = document.getElementById("laptime");
        const inputSetup = document.getElementById("setup");

        this.newTime.id = uuidv4();
        this.newTime.car = inputCar.value;
        this.newTime.powerIndex = inputIndex.value;
        this.newTime.laptime = inputLaptime.value;
        this.newTime.setup = inputSetup.value;
        

        this.$emit("add-new-time", this.newTime);

        inputCar.value = "";
        inputIndex.value = "";
        inputLaptime.value = "";
        inputSetup.value = "";
        this.isComplete = false;
      }
    },
    formatLaptimeInput(e) {
      if (e.key !== "Backspace") {
        const inputLaptime = document.getElementById("laptime");
        if (inputLaptime.value.length === 2) {
          inputLaptime.value += ":";
        }
        if (inputLaptime.value.length === 5) {
          inputLaptime.value += ",";
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../style/_globals.scss";

.container {
  height: 27rem;
  background: $bg-color;
  padding: 1rem;
  margin-top: 1rem;

  .car-container,
  .laptime-container,
  .setup-container {
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