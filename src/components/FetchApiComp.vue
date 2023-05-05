<script setup>
import {ref} from "vue";
  // let postData=ref('')
  // const getData=ref(()=>{
  //   fetch('http://localhost/Aakash/project_api/public/api/getData')
  //   .then(response =>response.json())
  //   .then(data=>postData.value=data)
  // })
//
// let MultiplePostData=ref([''])
// let getAllData=ref(()=>{
//   fetch('https://jsonplaceholder.typicode.com/posts')
//       .then(response =>response.json())
//       .then(data=>MultiplePostData.value=data)
// })
let data=ref({
  name:'',
  designation:'',
  city:''
})
let setPost=ref(()=>{
  fetch('http://localhost/Aakash/project_api/public/api/storeData',{
    method:'POST',
    headers:{
      'Content-Type' : 'application/json'
    },

    body:JSON.stringify({
      name:data.value.name,
      designation:data.value.designation,
      city:data.value.city
    })
  })
      .then(response =>response.json())
      .then(data=>console.log(data))
})
</script>
<template>
<!--  <h3>This is Fetch Api</h3>-->
<!--  <button @click="getData">Click here to show result</button>-->
<!--  <p>{{postData.id}}</p>-->
<!--  <p>{{postData.name}}</p>-->
<!--  <p>{{postData.designation}}</p>-->
<!--  <p>{{postData.city}}</p>-->

<!--  <button @click="getAllData">Click here to show All result</button>-->
<!--  <div v-for="data in MultiplePostData" :key="data.id">-->
<!--    <p>{{data.id}}</p>-->
<!--    <p>{{data.title}}</p>-->
<!--    <p>{{data.body}}</p>-->
<!--  </div>-->


  <form @submit.prevent="setPost">
    <div>
      <label for="name">Name</label>
      <input type ="text" id="name" v-model="data.name">
    </div>
    <div>
      <label for="designation">Designation</label>
      <input type ="text" id="designation" v-model="data.designation">
    </div>
    <div>
      <label for="city">City</label>
      <input type ="text" id="city" v-model="data.city">
    </div>
    <button>Submit</button>
  </form>
</template>
<style>

</style>