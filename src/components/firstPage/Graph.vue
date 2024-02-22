<script setup lang='ts'>
    import {ref,reactive} from 'vue';


</script>

<template>
    <div class='wrap'>
        <h2>一层</h2>
    </div>
</template>

<style scoped lang='less'>
 .wrap{
    background-color:pink;
    >h2{
        background-color:gray;
        text-align:center;
        font-size:3vw;
        font-weight:200;
        color:white;
    }
 }
</style>