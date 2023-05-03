<script setup>
import {ref, watchEffect, watch, reactive} from 'vue'

let postId=ref(1)
let message=ref('')
let data=ref({
  id:'',
  title:'',
  body:''
})

let clickedButtonWatch=ref(false)
let clickedButtonWatchRef=ref(false)
let onClickWatch=ref(()=>{
  clickedButtonWatch.value = true;
  clickedButtonWatchRef.value=false
  //Using Watch
  watch(
      postId,
      async(new_value, old_value)=>{
        if(new_value === old_value) return;
        console.log('>> Watch PostID Called', postId.value)
        let response =await fetch(`https://jsonplaceholder.typicode.com/posts/${postId.value}`)
        data.value=await response.json();
      },
      {immediate:true}
  )
})
let onClickWatchRef=ref(()=>{
  clickedButtonWatchRef.value = true;
  clickedButtonWatch.value=false
  //Using WatchEffect
  const stopWatchEffect=watchEffect(async()=>{
    console.log('>> Watch Effect Called')
    message.value='Loading..';
        let response = null;
        try {
          response =await fetch(`https://jsonplaceholder.typicode.com/posts/${postId.value}`)
        }
        catch (error){
          console.error(error.message);
          message.value= error.message;
          return;
        }

        if(!response) return;
        if(response === {}) return;

        data.value=await response.json();
        message.value=response.id
      },)
  if (postId.value.length === 10){
    stopWatchEffect();
  }

})





</script>

<template>
    <h3>#6: Watch vs WatchEffect difference</h3>
      <div>
        <button type="button" @click="onClickWatch" :class="{ red : clickedButtonWatch }">Watch</button> |
        <button type="button" @click="onClickWatchRef" :class="{ green : clickedButtonWatchRef }">WatchEffect</button>
      </div>
    <br>
  <div>
    <input type="text" v-model="postId"/><br>
    {{message}}<br>
    <div>{{data.id}}</div>
    <div>{{data.title}}</div>
    <div>{{data.body}}</div>
  </div>
</template>
<style>
.red {
  color: red;
}
.green {
  color: green;
}
</style>


<!--watch effect and watch delay and maximul length-->
