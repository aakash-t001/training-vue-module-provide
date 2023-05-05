<script setup>
const props =defineProps({
  data:{
    type:Object,
    required:true
  }
})
const emit=defineEmits({
  editData(dataId){
    if(dataId && typeof dataId==='number'){    //validation
      return true;
    }
    return false

  }
})
const updatePost=()=>{
  emit('editData',props.data.id)
}

</script>

<template>
  <div>
    {{data.id}}
  </div>
  <div>
    {{data.title}}
  </div>
  <button @click.prevent="updatePost">Edit Data</button>
  <hr/>
</template>

<style>

</style>