<template>
<div class="btn flex-col ai-c jc-c border-gradient">
    <img :src="require(`@/${btnImgSrc}`)" alt="">
    <p>Delete Mode</p>
</div>
    
</template>

<script>
export default {    
    name: "BtnDelete",
    props: ["btnImgSrc"]
}
</script>

<style lang="scss" scoped>
@import "../style/_globals.scss";
p {
    font-size: 1.8rem !important;
}
</style>