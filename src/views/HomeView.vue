<script setup lang="ts">
import FloorID from "../components/firstPage/FloorID.vue";
import Graph from "../components/firstPage/Graph.vue";
import List from "../components/firstPage/List.vue";
import { ref } from "vue";
import type { Ref } from "vue";
const currentEl: Ref<string> = ref("view");//判断改变顶部选择项颜色
const isListShow: Ref<boolean> = ref(false);//用于主界面与列表界面切换
const changeView = (param: string) => {
  currentEl.value = param;
  isListShow.value = param == "view" ? false : true;
}
</script>

<template>
  <h1>酒店远程显示控制系统</h1>
  <div class="wrap">
    <header>
      <div class="view" :style="{ backgroundColor: currentEl == 'view' ? 'white' : 'gray' }" @click="changeView('view')">视图</div>
      <div class="list" :style="{ backgroundColor: currentEl == 'view' ? 'gray' : 'white' }" @click="changeView('list')">列表</div>
    </header>

    <main v-show="!isListShow">
      <FloorID></FloorID>
      <Graph></Graph>
    </main>
    <List v-show="isListShow"></List>
  </div>
</template>

<style scoped lang="less">
h1 {
  text-align: center;
  font-size: 4vw;

}

header {
  display: flex;

  >div {
    flex: 1;
    text-align: center;
    border: solid 0.5vw;
    font-size: 3vw;
  }
}

main {
  display: flex;

  >:deep(.graphWrap) {
    flex: 1;
  }
}
</style>
