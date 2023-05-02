<script setup>
import {ref, watch} from "vue";
const count=ref(0)
const increment=(name,event)=>{
  count.value++;
  console.log(name)
  console.log(event.target.tagName)
}
const onLinkClick=()=>{
  console.log('Link Clicked')
}
const onParentClick=()=>{
  console.log('Parent Clicked')
}
const msg=ref('hello !')
const isCheckbox=ref(true)
let selectedCheckbox=ref([])


const question =ref('')
const answer =ref('Question generally contain  ?')
const responseData=ref('')
watch(question,async (newQuestion,oldQuestion)=>{
  if(newQuestion.indexOf('?') > -1){
    answer.value='thinking....';
    try {
      const response=await fetch('https://yesno.wtf/api')
      const responseJson=await response.json();
      responseData.value=responseJson;
      answer.value=responseJson.answer;
    }catch (error){
      answer.value='!Error Could Not Reach The Api'
    }
  }
})
</script>

<template>
  <div>
    <div>
      <h3>Event Handling & Event Modifiers</h3>
        <button @click="increment('akash',$event)">submit</button>
        <p>{{count}}</p>
    </div>
      <div @click="onParentClick">
        <a href="https://vuejs.org/" @click.stop.prevent="onLinkClick">Link Click</a>
      </div>
        <div>
          <h4>Form Input Bindings: v-model</h4>
          <input type ="text" v-model="msg" />
            <p>{{msg}}</p>
          <input type="checkbox" v-model="checkbox"/>
            <p>{{isCheckbox}}</p>
          <input type="checkbox" v-model="selectedCheckbox" value="one"/>
          <input type="checkbox" v-model="selectedCheckbox" value="two"/>
          <input type="checkbox" v-model="selectedCheckbox" value="three"/>
          <p>{{selectedCheckbox}}</p>
        </div>
          <div>
            <h4>Watchers</h4>
            <p>Ask a Questions?</p>
            <input type="text" v-model="question">
            <div>
              <p>Answer: {{answer}}</p>
              <img :src="responseData.image">
            </div>
          </div>
  </div>
</template>

<style>

</style>