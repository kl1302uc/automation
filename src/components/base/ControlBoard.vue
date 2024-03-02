<!-- 灯控器 -->

<script setup lang='ts'>
import { ref, reactive} from 'vue';
interface Position {
    top?: string,
    left?: string,
    right?: string,
    bottom?: string
}
interface Iposition{
 position:Position;
}
//---------------------需要解决-----------------
const {position}=withDefaults(defineProps<Iposition>(),{position:()=>{return {top:"",left:"",right:"",bottom:""}}});
const {top,left,right,bottom}=position;
const board=document.querySelector(".board");
console.log(board,"board");
</script>

<template>
    <div class='controlWrap'>
        <div class="lamp">灯</div>
        <div class="board">
            <h2>灯控器</h2>
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
        display: inline-grid;
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
