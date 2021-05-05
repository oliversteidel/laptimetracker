<template>
    <div class="container flex">
        <BtnNewTrack />
        <InputNewTrack />
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
    }
}
</script>

<style lang="scss" scoped>
@import "../assets/style/_globals.scss";
.container {
    width: 100%;
}
</style>