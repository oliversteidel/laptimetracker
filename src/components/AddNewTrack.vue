<template>
    <div class="container">
        <BtnNewTrack />
    </div>
</template>

<script>
import BtnNewTrack from "./BtnNewTrack"
export default {
    name: 'AddNewTrack',
    components: {
        BtnNewTrack
    }
}
</script>

<style lang="scss" scoped>
@import "../assets/style/_globals.scss";
</style>