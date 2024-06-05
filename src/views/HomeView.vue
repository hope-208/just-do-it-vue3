<template>
  <main class="main">

    <el-row class="header-task-container">
      <el-button class="header-task-container__btn" type="success" @click="openModal('add', false)">
        <el-icon class="el-icon--left">
          <Plus />
        </el-icon> Добавить задачу
      </el-button>
    </el-row>
    <el-scrollbar height="calc(100vh - 140px)">
      <el-col class="task-container">
        <el-input v-model="searchTask" placeholder="Введите ключевое слово для поиска по задачам" prefix-icon="Search"
          clearable @input="filteredTask(searchTask)" autofocus />
        <div v-if="searchTask == ''">
          <task-item v-for="(item, key) in tasksItems" :key="key" :task="key" :task-info="item" />

        </div>
        <div v-if="searchTask !== ''">
          <task-item v-for="(item, key) in filteredTaskItems" :key="item" :task="key" :task-info="item" />
        </div>
        <el-text v-if="tasksItems.length == 0 && filteredTaskItems.length == 0">Задачи отсутствуют.</el-text>
        <el-text v-if="filteredTaskItems.length == 0 && searchTask !== ''">Задачи не найдены. Измените поисковый
          запрос и повторите попытку.</el-text>
      </el-col>
    </el-scrollbar>
    <add-modal-task ref="refAddModalTask" />
    <look-modal-task ref="refModalTask" :modalValue="activeModalValue" />

  </main>
</template>

<script>
  import {
    storeToRefs
  } from 'pinia'
  import TaskItem from '@/components/TaskItem.vue';
  import AddModalTask from '@/components/AddModalTask.vue';
  import LookModalTask from '@/components/LookModalTask.vue';
  import {
    useTasksItemsStore
  } from '@/stores/TaskItemsStore'
  export default {
    name: 'HomeView',
    components: {
      TaskItem,
      AddModalTask,
      LookModalTask
    },
    setup() {
      const storeTasksItems = useTasksItemsStore()
      const {
        tasksItems,
        activeModalValue,
        searchTaskParams,
        filteredTaskItems
      } = storeToRefs(storeTasksItems)
      const {
        filteredTask,
        openModal
      } = storeTasksItems
      return {
        tasksItems,
        activeModalValue,
        searchTaskParams,
        filteredTaskItems,
        filteredTask,
        openModal
      }
    },
    data() {
      return {
        searchTask: ''
      }
    }
  }
</script>