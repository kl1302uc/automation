<!-- 电能表 -->
<script setup lang='ts'>
import { ref, reactive, onMounted, onUnmounted } from 'vue';
import type { Iposition } from "../../type/type";
const {position,address} = withDefaults(defineProps<Iposition>(),{position:()=>{return {top:"",left:"",right:"",bottom:""}},address:"0000"});
const {top,left,right,bottom} = position;
const meterWrap=ref<HTMLElement>();
const detail =ref<HTMLElement>();

/* 定义关闭包括自己所有兄弟组件 */
const closeMeters=()=>{
   const meters= meterWrap.value!.parentNode?.children as HTMLCollection;
   for(let i = 0;i<meters.length;i++){
    (meters[i] as HTMLElement).style.zIndex="1"; 
    if(meters[i].children[1]){
        (meters[i].children[1] as HTMLElement).style.display="none"; 
    }
   }
}
/* 窗口大小改变后自动改变灯控面板位置 */
const handleResize=()=>{
    let parentNodeWidth=(meterWrap.value?.parentNode as HTMLElement)?.clientWidth;
    let controlRight = meterWrap.value!.offsetLeft+detail.value!.offsetWidth;
    detail.value!.style.left=(parentNodeWidth-controlRight<0?parentNodeWidth-controlRight:0)+"px";
    meterWrap.value!.style.zIndex="99";
}
const meterEvent=()=>{
    closeMeters();
    let state = (getComputedStyle(detail.value as HTMLElement).display=="none")?"block":"none";
    console.log(state);
    detail.value!.style.display=state;
    state=="block"?handleResize():meterWrap.value!.style.zIndex="1";
   // console.log("lampEvent",(getComputedStyle(boardDom.value as HTMLElement).display=="none")?"inline-grid":"none");
}
onMounted(() => {
    let parentNodeWidth=(meterWrap.value?.parentNode as HTMLElement)?.clientWidth;
    let controlRight = meterWrap.value!.offsetLeft+detail.value!.offsetWidth;
    detail.value!.style.left=(parentNodeWidth-controlRight<0?parentNodeWidth-controlRight:0)+"px";
    window.addEventListener("resize",handleResize);
    window.addEventListener("click",()=>{detail.value!.style.display="none";meterWrap.value!.style.zIndex="1"});
})
onUnmounted(()=>{
    window.removeEventListener("resize",handleResize);
});
</script>

<template>
    <div class='meterWrap' ref="meterWrap" > 
        <div class="meter" @click.stop="meterEvent">
            45.23
        </div>
        <div class="detail" @click.stop ref="detail">
            <p>地址码:{{ address }}</p>
            <p>总电量:{{ 234 }}kwh</p>
            <p>总有功电量:{{342}}kwh</p>
            <p>A相电压:{{220}}V</p>
           <p>B相电压:{{220}}V</p>
           <p>C相电压:{{220}}V</p>
           <p>A相电流:{{220}}A</p>
           <p>B相电流:{{22}}A</p>
           <p>C相电流:{{2}}A</p>
           <p>备注:幼儿园</p>
        </div>
    </div>
</template>

<style scoped lang='less'>
.meterWrap {
    position: absolute;
    top: v-bind(top);
    left: v-bind(left);
    right: v-bind(right);
    bottom: v-bind(bottom);
   
    font-size: 2vw;
    >.meter{
        background-color:black;
        color:white;
       display:inline-block;
    }
    >.detail{
        position:absolute;
        background-color: green;
        display:none;
        >p{
            white-space:nowrap;
        }
    }
}
</style>