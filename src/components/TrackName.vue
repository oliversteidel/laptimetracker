<template>
    <div class="container flex ai-c jc-c border-gradient">
        <p>{{ selectedTrack }}</p>
    </div>
</template>

<script>
export default {
    name: "TrackName",
    props: ["selectedTrack"]
}
</script>

<style lang="scss" scoped>
@import "../style/_globals.scss";

.container {
    width: 100%;
    height: 8rem;
    background: $bg-color;

    p {
        font-size: 3rem;
        color: $font-color;
    }
}
</style>