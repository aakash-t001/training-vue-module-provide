<script setup>
import {reactive, ref, watch} from "vue";
const showResponse=ref('')
const typeValue=ref('Write "show" to call Api')
const responseData=ref('')
watch(showResponse,async (newShowResponse,oldShowResponse)=>{
  if(newShowResponse.indexOf('show') >-1){
    typeValue.value='Loading..';
    try{
      const response = await fetch ('https://jsonplaceholder.typicode.com/posts')
      const responseJson=await response.json()
      responseData.value=responseJson;
      typeValue.value=responseJson.typeValue
    }catch (error){
      typeValue.value='Api Not found'
    }
  }
})

const obj =reactive({
  count:'',
  name:'akash'
})
watch(
    ()=>obj.count,
    (newCount,oldCount)=>{
      console.log(`New Counter Value is ${newCount},${oldCount}`);
    }
)

//  you can also watch property to directly reactive to object
// watch(obj,(newCount)=>{
//       console.log(`New Counter Value is ${newCount.count}`);
//     }
// )
</script>
<template>
  <h3>Watch Comp Ref</h3>
  <input type="text" v-model="showResponse">
  <p>{{typeValue}}</p>
  <div v-for="data in responseData">
  <p>{{typeValue}}</p>
  <p>{{showResponse}}</p>
  <p>id:{{data.id}}</p>
  <p>title:{{data.title}}</p>
  <p>body:{{data.body}}</p>
  </div>

  <h3>Watch Comp Reactive</h3>
    <input type="text" v-model="obj.count">
  <p>{{obj.count}}</p>

</template>