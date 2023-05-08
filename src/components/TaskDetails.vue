<script setup>
import {useTaskStore} from "../stores/TaskStore";
const taskStore=useTaskStore()
const props = defineProps({
  task:{
    type:Object,
  }
})
</script>
<template>
  <div class="task">
    <h3>{{task.title}}</h3>
  </div>
  <div >

    <button @click="taskStore.deleteTask(task.id)">Delete</button>
    <button @click="taskStore.toggleFav(task.id)">Favorite</button>
  </div>
</template>
