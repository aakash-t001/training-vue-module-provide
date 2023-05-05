<script setup>
import {ref} from "vue";
// const postTitle=ref('this is post title')
</script>
<template>
  <div v-if="$slots.title">
    <slot name="title"></slot>
  </div>
<!--    <h3>-->
<!--      <slot name="title" :post_title="postTitle">Fallback title</slot>-->
<!--    </h3>-->

<!--    {{content}}-->
<!--    <button>-->
<!--      <slot></slot>-->
<!--    </button>-->

</template>

<style>

</style>