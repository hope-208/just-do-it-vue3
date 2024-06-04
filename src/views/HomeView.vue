<template>
  <main class="main">

    <el-row class="header-task-container">
      <el-button class="header-task-container__btn" type="success" @click="storeTasksItems.openModal('add', false)">
        <el-icon class="el-icon--left">
          <Plus />
        </el-icon> Добавить задачу
      </el-button>
    </el-row>
    <el-scrollbar height="calc(100vh - 140px)">
      <el-col class="task-container">
        <!-- <el-input v-model="searchTask" placeholder="Введите ключевое слово для поиска по задачам" prefix-icon="Search"
          @input="filtredTask()" /> -->
        <task-item v-for="item in storeTasksItems.tasksItems" :key="item.id" :task="item.id" :task-info="item" />
        <!-- <task-item v-for="item in filtredTaskItems" :key="item.id" :task="item.id" :task-info="item" /> -->
        <el-text v-if="storeTasksItems.tasksItems.length == 0">Задачи отсутствуют.</el-text>
      </el-col>
    </el-scrollbar>
    <add-modal-task ref="refModalTask" />
    <look-modal-task ref="refModalTask" :modalValue="storeTasksItems.activeModalValue"/>

  </main>
</template>

<script setup>
  import {
    useTasksItemsStore
  } from '@/stores/TaskItemsStore'
  const storeTasksItems = useTasksItemsStore()
</script>

<script>
  import TaskItem from '@/components/TaskItem.vue';
  import AddModalTask from '@/components/AddModalTask.vue';  
  import LookModalTask from '@/components/LookModalTask.vue';
  export default {
    name: 'HomeView',
    components: {
      TaskItem,
      AddModalTask,
      LookModalTask
    },
    directives: {
      focus: {
        inserted(el) {
          el.focus();
        }
      }
    },
    data() {
      return {
        // searchTaskKey: '',
        filtredTaskItems: []
      }
    },
    methods: {
      // filtredTask() {
      //   this.filtredTaskItems.forEach((item) => {
      //     if (item.title.includes(this.searchTask)) {
      //       return item
      //     }
      //   })
      // }
    }
  }
</script>