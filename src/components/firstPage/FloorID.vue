<!-- 左侧楼层列表 -->
<script setup lang='ts'>
    import {ref,reactive} from 'vue';
    import type{Ref} from "vue"
    const liNumber:number = 6;
    const currentIndex:Ref<number> = ref(0);
    const changeFloor=(ev:Event)=>{
        //myColor.value="white";

    }



</script>

<template>
    <ul >
        <li v-for="(index) in liNumber" :style="{backgroundColor:currentIndex==index?'white':'gray'}" :key="index" @click="changeFloor,currentIndex=index">{{ liNumber-index+1 }}层</li>
    </ul>
</template>

<style scoped lang='less'>

ul{
    list-style:none;
    background-color:gray;
    font-size:4vw;
    border:solid 0.5vw;
    >li{
        padding:2vw 3vw;
        &:not(&:first-child){
            border-top:solid 0.5vw;
        }

        
    }

}

</style>