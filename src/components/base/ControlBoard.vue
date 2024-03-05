<!-- 灯控器 -->

<script setup lang='ts'>
import { ref, reactive, onMounted ,onUnmounted} from 'vue';
import type { Position, Iposition } from "../../type/type";

const controlWrap= ref<HTMLElement>();
const boardDom= ref<HTMLElement>();
const { position,address } = withDefaults(defineProps<Iposition>(), { position: () => { return { top: "", left: "", right: "", bottom: "" } },address:"0000" });
const { top, left, right, bottom } = position;
/* 定义关闭包括自己所有兄弟组件 */
const closeLamps=()=>{
   const lamps= controlWrap.value!.parentNode?.children as HTMLCollection;
   for(let i = 0;i<lamps.length;i++){
    (lamps[i] as HTMLElement).style.zIndex="1"; 
    if(lamps[i].children[1]){
        (lamps[i].children[1] as HTMLElement).style.display="none"; 
    }
   }
}
/* 窗口大小改变后自动改变灯控面板位置 */
const handleResize=()=>{
    let parentNodeWidth=(controlWrap.value?.parentNode as HTMLElement)?.clientWidth;
    let controlRight = controlWrap.value!.offsetLeft+boardDom.value!.offsetWidth;
    boardDom.value!.style.left=(parentNodeWidth-controlRight<0?parentNodeWidth-controlRight:0)+"px";
   controlWrap.value!.style.zIndex="99";
}
/* 灯图标被点击后根据控制面板显示隐藏并改变层级 */
const lampEvent=()=>{
    closeLamps();
    let state = (getComputedStyle(boardDom.value as HTMLElement).display=="none")?"inline-grid":"none";
    boardDom.value!.style.display=state;
    state=="inline-grid"?handleResize():controlWrap.value!.style.zIndex="1";
   // console.log("lampEvent",(getComputedStyle(boardDom.value as HTMLElement).display=="none")?"inline-grid":"none");
}

onMounted(() => {
    let parentNodeWidth=(controlWrap.value?.parentNode as HTMLElement)?.clientWidth;
    let controlRight = controlWrap.value!.offsetLeft+boardDom.value!.offsetWidth;
    boardDom.value!.style.left=(parentNodeWidth-controlRight<0?parentNodeWidth-controlRight:0)+"px";
    window.addEventListener("resize",handleResize);
    window.addEventListener("click",()=>{boardDom.value!.style.display="none";controlWrap.value!.style.zIndex="1"});
});
onUnmounted(()=>{
    window.removeEventListener("resize",handleResize);
});
</script>

<template>
    <div class='controlWrap' ref="controlWrap">
        <div class="lamp" @click.stop="lampEvent">灯</div>
        <div class="board" @click.stop ref="boardDom">
            <h2>地址:{{ address }}</h2>
            <div>
                <div></div>1<button></button>
            </div>
            <div>
                <div></div>2<button></button>
            </div>
            <div>
                <div></div>3<button></button>
            </div>
            <div>
                <div></div>4<button></button>
            </div>
            <div>
                <div></div>5<button></button>
            </div>
            <div>
                <div></div>6<button></button>
            </div>
            <div>全开<button></button></div>
            <div>
                <div></div>7<button></button>
            </div>
            <div>
                <div></div>8<button></button>
            </div>
            <div>
                <div></div>9<button></button>
            </div>
            <div>
                <div></div>10<button></button>
            </div>
            <div>
                <div></div>11<button></button>
            </div>
            <div>
                <div></div>12<button></button>
            </div>
            <div>全关<button></button></div>
        </div>
    </div>
</template>

<style scoped lang='less'>
.controlWrap {
    position: absolute;
    top: v-bind(top);
    left: v-bind(left);
    right: v-bind(right);
    bottom: v-bind(bottom);
    z-index:1;

    >.lamp {
        width: 4vw;
        line-height: 4vw;
        background-color: gray;
        color: yellow;
        border-radius: 50%;
        text-align: center;
        font-size: 3vw;
    }

    >.board {
        background-color: white;
        border: solid 0.2vw;
        box-shadow: 0.5vw 0.5vw 1vw;
        display: none;
        grid-template-columns: repeat(7, 1fr);
        grid-template-rows: repeat(3, auto);
        align-items: flex-end;
        position: absolute;

        >h2 {
            grid-area: 1/1/1/8;
            text-align: center;
            font-size: 3vw;
            margin-bottom: 2vw;
        }

        >div {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 2vw;
            font-size: 2vw;

            >div {
                width: 2vw;
                height: 2vw;
                background-color: gray;
                border-radius: 50%;
            }

            >button {
                width: 4vw;
                height: 2vw;
                background-color: gray;
                margin: 0 2vw;
            }
        }

    }
}
</style>
