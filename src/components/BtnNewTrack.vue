<template>
<div class="container flex-col ai-c jc-c border-gradient">
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
    max-width: 10rem;
    height: 10rem;
    background: $bg-color;
    
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