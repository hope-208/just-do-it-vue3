<template>
  <main>
    <task-category />
  </main>
</template>



<script>
import TaskCategory from '@/components/TaskCategory.vue';

export default {
  name: 'HomeView',
  components: { TaskCategory }
}
</script>
