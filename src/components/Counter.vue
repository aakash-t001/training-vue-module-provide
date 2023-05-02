<script setup>

import {computed, reactive, ref} from 'vue'
const count =ref(0)
const increaseValue=()=>count.value++
const decreaseValue=()=>count.value--
const isEvenOrOdd=computed(()=>{
  return count.value%2 ===0 ? 'Even' :'Odd'
})
const classObjects =reactive({
  active:true,
  'text-danger':true
})
const data=reactive([
  {id:1,title:'title 1'},
  {id:2,title:'title 2'},
  {id:3,title:'title 3'}
])
const shuffle=()=>{
  data.sort(()=>Math.random()-0.5)
}

</script>
<template>
  <div>
    <h3>This is Counter File</h3>
  </div>
  <div>
    <button @click="decreaseValue">-</button>
    <span>{{count}}</span>
    <button @click="increaseValue">+</button>
    <div>The Counter Value is {{isEvenOrOdd}}</div>
  </div>
  <h3>Class Binding</h3>
  <div :class="classObjects">Apply Class</div>

  <h3>V for Directive</h3>
  <div>
    <ul>
      <li v-for="user in data" :key="user.id">
        <div>{{user.title}}</div>
        <div><input type="text"/></div>
      </li>
    </ul>
    <button @click="shuffle">Click to shuffle</button>
  </div>


</template>
<style>

</style>