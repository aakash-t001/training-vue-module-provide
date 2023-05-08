<script setup>
import {useTaskStore} from "../stores/TaskStore";
import {ref} from "vue";
const taskStore=useTaskStore()
const newTask=ref('')
const formSubmit=()=>{
  if(newTask.value.length>0){
    taskStore.addTask({
      title:newTask.value,
      isFav:false,
      id:Math.floor(Math.random() * 10000)
    })
    newTask.value=''
  }
}
</script>

<template>
  <form @submit.prevent="formSubmit">
    <input type="text" placeholder="add more" v-model="newTask">
    <button>Add</button>
  </form>
</template>

<style>

</style>