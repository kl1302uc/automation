<script setup lang='ts'>
import { ref, reactive } from 'vue';


</script>

<template>
    <table>
        <caption>配电室</caption>
        <thead>
            <tr>
                <th colspan="5">南&lt;----------</th>
                <th colspan="2">西北侧</th>
                <th colspan="5">----------&gt;北</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>234</td>
                <td>234</td>
                <td>234</td>
                <td>234</td>
                <td>234</td>
                <td>234</td>
                <td>234</td>
                <td>234</td>
                <td>234</td>
                <td>234</td>
                <td>234</td>
                <td>234</td>
            </tr>
            <tr>
                <td>234</td>
                <td>234</td>
                <td>234</td>
                <td>234</td>
                <td>234</td>
                <td>234</td>
                <td>234</td>
                <td>234</td>
                <td>234</td>
                <td>234</td>
                <td>234</td>
                <td>234</td>
            </tr>
            <tr>
                <td>234</td>
                <td>234</td>
                <td>234</td>
                <td>234</td>
                <td>234</td>
                <td>234</td>
                <td>234</td>
                <td>234</td>
                <td>234</td>
                <td>234</td>
                <td>234</td>
                <td>234</td>
            </tr>
        </tbody>

    </table>
</template>

<style scoped lang='less'>
table {
    width: 100%;
    border-collapse: collapse;
    >caption{
        font-size:4vw;
        font-weight:bold;
    }

    td,
    th {
        border: solid 0.3vw gray;
        font-size: 3vw;
        text-align: center;
    }

    >thead {
        >tr {
            >th {
                font-weight:normal;
                &:first-child {
                    text-align: left;
                    border-right:none;
                }
                &:nth-child(2){
                   
                    border-left:none;
                    border-right:none;
                }
                &:last-child{
                    text-align:right;
                    border-left:none;
                }
            }
        }
    }
}
</style>