<template>

  <el-dialog v-model="storeTasksItems.isOpenModalLook" width="50%" @close="storeTasksItems.closeModal">
    <template #header>
      <div class="my-header">
        <h4 class="header-popup">{{ storeTasksItems.titleModal }}</h4>
      </div>
    </template>

    <el-row>
          <el-col :span="4" style="font-weight: 600;">Название:</el-col>
          <el-col :span="20">{{ storeTasksItems.tasksItems[storeTasksItems.activeId]?.title }}</el-col>
        </el-row>
    <el-row>
          <el-col :span="4" style="font-weight: 600;">Описание:</el-col>
          <el-col :span="20">{{ storeTasksItems.tasksItems[storeTasksItems.activeId]?.description }}</el-col>
        </el-row>
    <el-row>
          <el-col :span="4" style="font-weight: 600;">Создано:</el-col>
          <el-col :span="20">{{ storeTasksItems.tasksItems[storeTasksItems.activeId]?.createAt }}</el-col>
        </el-row>
{{ storeTasksItems.tasksItems[storeTasksItems.activeId]?.updateAt[0] }}
        
        <el-row v-if="!!storeTasksItems.tasksItems[storeTasksItems.activeId]?.updateAt">
          <el-button type="primary" icon="ArrowDown" @click="visibleOpenHistory" style="margin-left: auto;">
            Журнал изменений</el-button>
        </el-row>
     
        <div v-if="isOpenHistory">
        <el-row>
          <el-col :span="4" style="font-weight: 600;">Дата</el-col>
          <el-col :span="20" style="font-weight: 600;">Действия</el-col>
        </el-row>
        <el-row v-for="item in storeTasksItems.tasksItems[storeTasksItems.activeId]?.updateAt" :key="item">
          <el-col :span="4">{{item.dateChange}}</el-col>
          <el-col :span="20">
            <el-row v-for="el in item.actions" :key="el">— {{el}}</el-row>           
          </el-col>
          </el-row>
</div>
  </el-dialog>
</template>

<script setup>
import { useTasksItemsStore } from '@/stores/TaskItemsStore'

const storeTasksItems = useTasksItemsStore()
</script>


<script>

export default {
  name: 'LookModalTask',
  props: ['modalValue'],
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

<style scoped>
.el-descriptions {
  margin-top: 20px;
}

.cell-item {
  display: flex;
  align-items: center;
}

.margin-top {
  margin-top: 20px;
}
</style>