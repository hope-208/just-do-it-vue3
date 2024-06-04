<template>
  <el-card class="task-container">
    <el-row class="task__name">
      {{ storeTasksItems.tasksItems[task] }}
      <!-- ToDo <el-button class="task__btn-dropdown">
        <el-icon>
          <CaretBottom :size="18" />
        </el-icon>
      </el-button> -->
      <el-checkbox v-model="storeTasksItems.tasksItems[task].isDone" 
      @change="storeTasksItems.statusDone(task)" 
        class="task__check" />
      <input v-if="storeTasksItems.tasksItems[task].editable" v-model="storeTasksItems.tasksItems[task].title"
        class='task-name-edit'
         @blur="storeTasksItems.statusEditable(task)"
        v-focus>
      <el-text v-else @click="storeTasksItems.statusEditable(task)">{{ storeTasksItems.tasksItems[task].title
        }}</el-text>


      <div>
        <el-icon>
          <Notification :size="18"
            @click="storeTasksItems.openModal('look', storeTasksItems.tasksItems[task].categoryId, task)" />
        </el-icon>
        <el-icon :size="18"
          @click="storeTasksItems.openModal('edit', storeTasksItems.tasksItems[task].categoryId, task)">
          <Edit />
        </el-icon>
        <el-icon :size="18" @click="storeTasksItems.deleteTask(task)">
          <Delete />
        </el-icon>
      </div>
    </el-row>
    <!-- ToDo <el-row class="task__add">
      <el-link class="task__add-link" @click="storeTasksItems.addTask(task)"><el-icon>
          <Plus />
        </el-icon> Добавить подзадачу</el-link>
    </el-row> 
    <el-text v-for="item in storeSubtaskItems.subtaskItems.filter(x => x.taskId === task.id)" :key="item.id">{{ item
      }}</el-text>
   <subtask-item v-for="item in storeSubtaskItems.subtaskItems.filter(x => x.taskId === task.id)" :key="item.id"
      :subtask="item.id" @dragstart="onDragStart($event, item)" :draggable="true" /> -->
  </el-card>






  <!-- <span class="custom-tree-node">
  <el-row class="el-tree-node_task-content">
   <input v-if="node.editable" v-model="newValue" class='task-name-edit' @blur="updateLabel(node, data)"
    @keyup.enter="updateLabel(node, data)" v-focus>
   <span v-else @click="node.editable = true" class='task-name'>{{ node.label }}</span>
   <span class="el-tree-node_btn-group">
    <el-icon :size="18">
     <Edit @click="edit(data, evt)" />
    </el-icon>
    <el-icon :size="18">
     <Delete @click="remove(node, data)" />
    </el-icon>
   </span></el-row>
  <span >{{ node.label }}</span> 

  <div>-->

  <!-- <a @click="append(data)"> 
   <a @click="append(data)">
    <el-icon>
     <Plus />
    </el-icon> Добавить задачу
   </a>
  </div>
 </span> -->


    <look-modal-task ref="refModalTask" :modalValue="storeTasksItems.activeModalValue"/>


</template>

<script setup>
import { useTasksItemsStore } from '@/stores/TaskItemsStore'
// import { useSubtaskItemsStore } from '@/stores/SubtaskItemsStore'

const storeTasksItems = useTasksItemsStore()
// const storeSubtaskItems = useSubtaskItemsStore()


</script>

<script>
// import SubtaskItem from '@/components/SubtaskItem.vue';

import LookModalTask from '@/components/LookModalTask.vue';

export default {
  name: 'TaskItem',
  props: {
    task: Number,
    categoryId: Number
  },
  components: {
    //ModalCategory,
   // EditModalTask,
    LookModalTask
  },
  // components: { SubtaskItem },
  data() {
    return {}
  }
}
</script>

<style></style>