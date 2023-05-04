<script setup>
import  PropsChildEventComp from '../components/PropsChildEventComp.vue'
import {ref} from "vue";

let collection=ref([
  {id:1,title:'this is title1'},
  {id:2,title:'this is title2'},
  {id:3,title:'this is title3'},
  {id:4,title:'this is title4'},
])
const updateData=(dataId)=>{
  collection.value=collection.value.map(data =>{
    if(data.id===dataId)
      return{
        ...data,title:'Data is Updated',
      }
    return data;
        })
};
</script>

<template>
  <div>
    <h3>This one parents</h3>
    <div>
      <props-child-event-comp v-for="data in collection" :data="data" :key="data.id" @editData="updateData"/>
    </div>
  </div>
</template>

<style>

</style>