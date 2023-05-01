<script setup>
// export default {
//   data(){
//     return{
//       count:0
//     }
//   },
//   methods:{
//     increaseCounter(){
//       this.count++
//     },
//     decreaseCounter(){
//       this.count--
//     }
//   }
// }

import {ref} from 'vue'
const count =ref(0)
const increaseValue=()=>count.value++
const decreaseValue=()=>count.value--

</script>
<template>
  <div>
    <h3>This is Counter File</h3>
  </div>
  <div>
<!--    <button @click.prevent="decreaseCounter">-</button>-->
<!--    <span>{{count}}</span>-->
<!--    <button @click.prevent="increaseCounter">+</button>-->

    <button @click="decreaseValue">-</button>
    <span>{{count}}</span>
    <button @click="increaseValue">+</button>
  </div>

</template>
<style>

</style>