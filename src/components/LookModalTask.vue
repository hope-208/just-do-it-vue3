<template>

  <el-dialog v-model="isOpenModalLook" width="50%" @close="closeModal, visibleOpenHistory()">
    <template #header>
      <div class="my-header">
        <h4 class="header-popup">{{ titleModal }}</h4>
      </div>
    </template>

    <el-row>
      <el-col :span="4" style="font-weight: 600;">Название:</el-col>
      <el-col :span="20">{{ tasksItems[activeId]?.title }}</el-col>
    </el-row>
    <el-row>
      <el-col :span="4" style="font-weight: 600;">Описание:</el-col>
      <el-col :span="20">{{ tasksItems[activeId]?.description }}</el-col>
    </el-row>
    <el-row>
      <el-col :span="4" style="font-weight: 600;">Создано:</el-col>
      <el-col :span="20">{{ tasksItems[activeId]?.createAt }}</el-col>
    </el-row>
    
    <el-row v-if="tasksItems[activeId]?.updateAt.length">
      <el-button type="primary" icon="ArrowDown" @click="visibleOpenHistory" style="margin-left: auto;">
        Журнал изменений</el-button>
    </el-row>

    <div v-if="tasksItems[activeId]?.updateAt.length && isOpenHistory">
      <el-row>
        <el-col :span="4" style="font-weight: 600;">Дата</el-col>
        <el-col :span="20" style="font-weight: 600;">Действия</el-col>
      </el-row>
      <el-row v-for="item in tasksItems[activeId]?.updateAt" :key="item">
        <el-col :span="4">{{item.dateChange}}</el-col>
        <el-col :span="20">
          <el-row v-for="el in item.actions" :key="el">— {{el}}</el-row>
        </el-col>
      </el-row>
    </div>
  </el-dialog>
</template>

<script>
  import {
    storeToRefs
  } from 'pinia'
  import {
    useTasksItemsStore
  } from '@/stores/TaskItemsStore'
  export default {
    name: 'LookModalTask',
    props: ['modalValue'],
    setup() {
      const storeTasksItems = useTasksItemsStore()
      const {
        isOpenModalLook,
        titleModal,
        tasksItems,
        activeId
      } = storeToRefs(storeTasksItems)
      const {
        closeModal
      } = storeTasksItems
      return {
        isOpenModalLook,
        titleModal,
        tasksItems,
        activeId,
        closeModal
      }
    },
    data() {
      return {
        isOpenHistory: false
      }
    },
    methods: {
      visibleOpenHistory() {
        this.isOpenHistory = !this.isOpenHistory
      }
    }
  }
</script>