<!-- 图纸位置图 -->
<script setup lang='ts'>
import { ref, reactive, type Ref } from 'vue';
import EnergyMeter from "../base/EnergyMeter.vue";
import ControlBoard from "../base/ControlBoard.vue";
import { useCounterStore } from "../../stores/counter";
const graphStore = useCounterStore();


</script>

<template>
    <div class='graphWrap'>
        <h2>{{ graphStore.floorNumber }}</h2>
        <div class="graphDetail">
            <EnergyMeter></EnergyMeter>
            <ControlBoard :position="{top:'23%',left:'50%'}"></ControlBoard>
        </div>
    </div>
</template>

<style scoped lang='less'>
.graphWrap {
    background-color: pink;
    display: flex;
    flex-direction: column;

    >h2 {
        background-color: gray;
        text-align: center;
        font-size: 3vw;
        font-weight: 200;
        color: white;
    }

    .graphDetail {
        position: relative;
        flex: 1;
        border: solid 2vw red;
    }
}
</style>