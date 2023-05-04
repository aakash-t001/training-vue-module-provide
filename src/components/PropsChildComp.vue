<script setup>
  const props=defineProps({
    id:[Number,String],
    postData:{
      title:String,
      designation:String
    },
    postDataUpdate:{
      type:Function,
      default(){
        return 'welcome'
      }
    }
  })

</script>
<template>
    <div>
        <h4>This is child comp</h4>
        <p>{{id}}</p>
        <p>{{postData.title}}</p>
      <button @click="postDataUpdate">Changed Date</button>
    </div>
</template>
<style>

</style>