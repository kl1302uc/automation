<!-- 左侧楼层列表 -->
<script setup lang='ts'>
    import {ref,reactive} from 'vue';
    import type{Ref} from "vue";
    import {useCounterStore} from "../../stores/counter";
    const graphStore=useCounterStore();
    const liNumber:number[] = [6,5,4,3,2,1,-1,-2];
    const currentIndex:Ref<number> = ref(5);
    const changeFloor=(floor:string)=>{
        //myColor.value="white";
        graphStore.floorNumber=floor;
    }



</script>

<template>
    <ul >
        <li v-for="(item,index) in liNumber" :style="{backgroundColor:currentIndex==index?'white':'gray'}" :key="index" @click="changeFloor(item+'层'),currentIndex=index">{{item}}层</li>
    </ul>
</template>

<style scoped lang='less'>

ul{
    list-style:none;
    background-color:gray;
    font-size:4vw;
    border:solid 0.5vw;
    border-top:none;
    >li{
        padding:2vw 3vw;
        &:not(&:first-child){
            border-top:solid 0.5vw;
        }

        
    }

}

</style>