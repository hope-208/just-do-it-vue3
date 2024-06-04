<template>
 <el-card class="task-container">
  <el-row class="task__name">
    {{ storeSubtaskItems.subtaskItems[subtask] }}
   <el-checkbox v-model="storeSubtaskItems.subtaskItems[subtask].isDone" @change="storeSubtaskItems.statusDone(subtask)" class="task__check"></el-checkbox>
   <input v-if="storeSubtaskItems.subtaskItems[subtask].editable" v-model="storeSubtaskItems.subtaskItems[subtask].title" class='task-name-edit'
        @blur="storeSubtaskItems.statusEditable(subtask)" v-focus>
      <el-text v-else @click="storeSubtaskItems.statusEditable(subtask)">{{ storeSubtaskItems.subtaskItems[subtask].title }}</el-text>
   <div>
    <el-icon :size="18">
     <Edit />
    </el-icon>
    <el-icon :size="18">
     <Delete />
    </el-icon>
   </div>
  </el-row>
 </el-card>
</template>

<script setup>
import { useSubtaskItemsStore } from '@/stores/SubtaskItemsStore'

const storeSubtaskItems = useSubtaskItemsStore()


</script>

<script>

export default {
name: 'SubtaskItem',
props: ['subtask']

}
</script>

<style></style>