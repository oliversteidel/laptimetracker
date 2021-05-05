<template>
    <div class="container flex">
        <BtnNewTrack />
        <InputNewTrack v-on:add-track="emitData" />
    </div>
</template>

<script>
import BtnNewTrack from "./BtnNewTrack";
import InputNewTrack from "./InputNewTrack"

export default {
    name: 'AddNewTrack',
    components: {
        BtnNewTrack,
        InputNewTrack
    },
    data() {
        return {
            trackObj: ""
        }
    },
    methods: {
        emitData(data) {
            this.trackObj = data;
            this.$emit('add-track', this.trackObj);
            this.trackObj = "";
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../style/_globals.scss";
.container {
    width: 100%;
}
</style>