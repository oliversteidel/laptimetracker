<template>
    <div class="container">
        <TheHeader />
        <AddNewTrack />
    </div>
</template>

<script>
import TheHeader from "./TheHeader.vue";
import AddNewTrack from "./AddNewTrack"
export default {
    name: 'TheHomeScreen',
    components: {
        TheHeader,
        AddNewTrack
    }
}
</script>