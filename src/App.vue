<script setup>
import {useTaskStore} from './stores/TaskStore.js'
import TaskDetails from './components/TaskDetails.vue'
import TaskFormCreate from './components/TaskFormCreate.vue'
import {ref} from "vue";
const taskStore=useTaskStore()
const  filter =ref('all')



//fetch task
// taskStore.getTask()
</script>

<template>
    <div>
      <h3>Pinia</h3>
    </div>
          <div v-if="filter ==='all'">
              <p>You Have {{taskStore.totalCount}} tasks left to do</p>
              <div v-for="task in taskStore.task">
                <TaskDetails :task="task"/>
              </div>
          </div>

          <div v-if="filter ==='favs'">
            <p>You have {{taskStore.favCount}} favs left to do</p>
            <div v-for="task in taskStore.favs">
                    <TaskDetails :task="task"/>
            </div>
          </div>
  <br>
    <div>
      <button @click="filter='all'">All Task</button>
      <button @click="filter='favs'">Favs Task</button>
    </div>

    <div>
      <p>New Task add</p>
      <TaskFormCreate/>
    </div>

  <div>
    <button @click="taskStore.$reset">Reset State</button>
  </div>
</template>

<style scoped>

</style>
