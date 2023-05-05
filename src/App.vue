<script setup>
import SlotComp from "./components/SlotComp.vue";

</script>

<template>
  <div>
    <slot-comp/>
    <slot-comp>
      <template v-slot:title>This is Title</template>
    </slot-comp>
<!--    <slot-comp>-->
<!--      <template v-slot:title="p">-->
<!--        {{p.post_title}}-->
<!--      </template>-->
<!--    </slot-comp>-->
<!--        <slot-comp title="title2"/>-->
<!--    <slot-comp>-->
<!--      <span style="color:red"> Click</span>-->
<!--      <span style="color:blue">Here</span>-->
<!--    </slot-comp>-->
  </div>

</template>

<style>

</style>
