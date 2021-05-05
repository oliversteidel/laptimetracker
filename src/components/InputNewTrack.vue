<template>
<div class="container flex-col jc-c border-gradient">
    <label for="race-track">Racetrack</label>
    <input type="text" name="race-track" id="race-track" class="border-gradient">
</div>
    
</template>

<script>
export default {
    name: 'InputNewTrack'
    
}
</script>

<style lang="scss" scoped>
@import "../assets/style/_globals.scss";
.container {
    height: 10rem;
    background: $bg-color;
    padding: 1rem;

    label {
        font-size: 2rem;
        color: $font-color;
        margin-bottom: 1rem;
    }

    input {
        appearance: none;
        height: 3.5rem;
        background: $input-bg-color;
        padding-left: 1rem;
        font-size: 1.8rem;
        font-family: inherit;
        color: $font-color;
    }
}

</style>