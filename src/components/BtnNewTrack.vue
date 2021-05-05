<template>
<div class="container flex-col ai-c jc-c">
    <img src="../assets/img/icon-track.svg" alt="icon of a racetrack">
    <p>New Track</p>
</div>
    
</template>

<script>
export default {
    name: 'BtnNewTrack'
    
}
</script>

<style lang="scss" scoped>
@import "../assets/style/_globals.scss";

.container {
    width: 10rem;
    height: 10rem;
    background: $bg-color;
    border: 1px solid;
    border-image-slice: 1;
    border-width: 1px;
    border-image-source: $gradient;

    img {
        width: 5rem;
        height: auto;
        margin-bottom: 0.5rem;
    }

    p {
        font-size: 2rem;
        color: $font-color;

    }
}
</style>