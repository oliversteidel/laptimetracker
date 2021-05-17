<template>
  <ul>
    <li
      class="flex ai-c jc-c border-gradient"
      v-for="track in tracks"
      :key="track.name"      
      @click="$emit('track-clicked', track.name)"
    >
      {{ track.name }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "Tracklist",
  props: ["tracks"],

  
};
</script>

<style lang="scss" scoped>
@import "../style/_globals.scss";

li {
  width: 100%;
  height: 8rem;
  background: $bg-color;
  font-size: 3rem;
  color: $font-color;
  margin-top: 1rem;
  cursor: pointer;
}
</style>