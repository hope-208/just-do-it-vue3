<template>

  <el-dialog v-model="storeTasksItems.isOpenModalEdit" width="50%" @close="storeTasksItems.closeModal, resetForm()">
    <template #header>
      <div class="my-header">
        <h4 class="header-popup">{{ storeTasksItems.titleModal }}</h4>
      </div>
    </template>
    <el-form ref="refTaskForm" :model="taskForm" :rules="rulesTask">
      {{ taskForm }}
      <el-form-item class="form-label" label="Название" prop="title">
        <el-input v-model="taskForm.title" placeholder="Введите название задачи" clearable />
      </el-form-item>

      <el-form-item class="form-label" label="Описание" prop="description">
        <el-input v-model="taskForm.description" :rows="3" type="textarea" placeholder="Введите описание задачи" />
      </el-form-item>
    </el-form>
    <template #footer>
      <div>
        <el-button @click="storeTasksItems.closeModal(), resetForm()">Отмена</el-button>
        <el-button type="primary" @click="storeTasksItems.saveModalData(taskForm), submitForm()">
          {{ storeTasksItems.btnModal }}
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup>
  import {
    useTasksItemsStore
  } from '@/stores/TaskItemsStore'
  const storeTasksItems = useTasksItemsStore()
</script>

<script>
  export default {
    name: 'AddModalTask',
    data() {
      return {
        taskForm: {
          title: '',
          description: ''
        },
        rulesTask: {
          title: [{
              required: true,
              message: 'Название задачи не может быть пустым.',
              trigger: 'blur'
            },
            {
              min: 3,
              message: 'Минимальное количество символов: 3.',
              trigger: 'blur'
            }
          ],
          description: [{
              required: true,
              message: 'Описание задачи не может быть пустым.',
              trigger: 'blur'
            },
            {
              min: 3,
              message: 'Минимальное количество символов: 3.',
              trigger: 'blur'
            }
          ],
        }
      }
    },
    methods: {
      submitForm() {
        this.$refs.refTaskForm.validate((valid) => {
          if (!valid) {
            return
          } else {
            this.resetForm()
          }
        })
      },
      resetForm() {
        this.$refs.refTaskForm.resetFields()
        this.$refs.refTaskForm.clearValidate()
      }
    }
  }
</script>