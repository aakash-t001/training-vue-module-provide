<script setup>
import axios from "axios";
import {onMounted, ref} from "vue";
// const getData=ref('')
// onMounted(() => {
//   axios.get('http://localhost/Aakash/project_api/public/api/getData/1')
//       // .then(response=>console.log(response))
//           .then(response=>getData.value=response.data)
// })
// const getData=ref([''])
// onMounted(() => {
//   axios.get('http://localhost/Aakash/project_api/public/api/get-all-data')
//       // .then(response=>console.log(response))
//       .then(response=>getData.value=response.data)
// })

const getData=ref([''])
onMounted(() => {
  axios.post('http://localhost/Aakash/project_api/public/api/get-all-data',{

  })
      // .then(response=>console.log(response))
      .then(response=>getData.value=response.data)
})



</script>

<template>
<!--  <div>-->
<!--    <h3>This is Axios Api single fetch by id</h3>-->
<!--    <p>{{getData.id}}</p>-->
<!--    <p>{{getData.name}}</p>-->
<!--    <p>{{getData.designation}}</p>-->
<!--    <p>{{getData.city}}</p>-->
<!--  </div>-->
<!--  <h3>This is Axios Api Multiple fetch</h3>-->
<!--  <div v-for="data in getData" :key="data.id">-->
<!--    <h2>{{data.id}} {{data.name}}</h2>-->
<!--    <span>{{data.designation}}</span>-->
<!--    <p>{{data.city}}</p>-->
<!--  </div>-->
</template>

<style>

</style>