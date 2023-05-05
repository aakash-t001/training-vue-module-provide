<script setup>
import PropsChildComp from '../components/PropsChildComp.vue'
import {ref} from "vue";
const postData=ref({
  title:'This is Title',
  designation:'software developer'
});
const postDataUpdate=ref(()=>{
  postData.value.title='this is Updated title using child';
})
</script>
<template>
  <div>
    <h3>Parent Comp</h3>
  </div>
<props-child-comp :id="10" :postData="postData" :postDataUpdate="postDataUpdate"/>
</template>
<style>

</style>