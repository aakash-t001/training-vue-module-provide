<script setup>
import {reactive, ref} from "vue";
const school=reactive([
    {id:1,name:'kms'},
    {id:2,name:'dps'},
    ]
)
const selection=ref('')
const input=ref('')
const getValue=ref([])
const classValue =ref('')
const addData=(selection,selections)=>{
  getValue.value.push({
    name:selection,
    class:selections
  })
}

</script>

<template>
  <div>
    <table>
      <tr>
        <th>name</th>
        <th>class</th>
      </tr>
      <tr v-for="(values, index) in getValue" :key="values.id">
        <td v-if="values.name === 'kms'">{{index}} {{values.name}} {{values.class}}</td>
        <td v-if="values.name === 'dps'">{{index}} {{values.name}} {{values.class}}</td>
      </tr>
    </table>

    <select v-model="selection">
      <option v-for="data in school" :value="data.name" :key="data.id">{{data.name}}</option>
    </select>
    <input type="text" v-model="classValue"/>
    <button @click="addData(selection,classValue)">Submit</button>
  </div>
</template>


<style>

</style>