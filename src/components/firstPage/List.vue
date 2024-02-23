<!-- 表格数据图 -->
<script setup lang='ts'>
    import {ref,reactive} from 'vue';
    import DistributionRoom from "../../components/tableView/DistributionRoom.vue";


</script>

<template>
    <div class='listWrap'>
        <DistributionRoom></DistributionRoom>
    </div>
</template>

<style scoped lang='less'>
.listWrap{
    border:solid 1vw;
}

</style>