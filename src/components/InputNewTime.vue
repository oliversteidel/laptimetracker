<template>
<div class="container flex-col jc-sb border-gradient">
    <div class="car-index-container flex jc-sb">
        <div class="car-container flex-col">
            <label for="car">Car</label>
            <input type="text" name="car" id="car" class="border-gradient">
        </div>
        <div class="index-container flex-col">
            <label for="index">Index</label>
            <input type="text" name="index" id="index" class="border-gradient">
        </div>
    </div>
    <div class="laptime-container flex-col">
        <label for="laptime">Laptime</label>
        <input type="text" name="laptime" id="laptime" class="border-gradient">
    </div>

</div>
    
</template>

<script>
export default {
    name: "InputNewTime"
}
</script>

<style lang="scss" scoped>
@import "../style/_globals.scss";

.container {
    height: 18rem;
    background: $bg-color;
    padding: 1rem;
    margin-top: 1rem;

    .car-container {
        width: 70%;
    }

    .index-container {
        width: 25%;
    }

    
}
</style>