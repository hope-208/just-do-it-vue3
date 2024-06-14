<template>
 <component :is="icon" class="icon" />
</template>


<script setup>
import { defineAsyncComponent } from 'vue';

const props = defineProps({
 name: {
  type: String,
  required: true,
 }
});

const icon = defineAsyncComponent(() =>
 import(`../assets/icon/${props.name}.svg`)
);
</script>