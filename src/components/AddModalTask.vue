<template>

  <el-dialog v-model="isOpenModalEdit" width="50%" @close="closeModal, resetForm()">
    <template #header>
      <div class="my-header">
        <h4 class="header-popup">{{ titleModal }}</h4>
      </div>
    </template>
    <el-form ref="refTaskForm" :model="taskForm" :rules="rulesTask">
      <el-form-item class="form-label" label="Название" prop="title">
        <el-input v-model="taskForm.title" placeholder="Введите название задачи" clearable />
      </el-form-item>

      <el-form-item class="form-label" label="Описание" prop="description">
        <el-input v-model="taskForm.description" :rows="3" type="textarea" placeholder="Введите описание задачи"
         />
      </el-form-item>
    </el-form>
    <template #footer>
      <div>
        <el-button @click="closeModal(), resetForm()">Отмена</el-button>
        <el-button type="primary" @click="saveModalData(taskForm), submitForm()">
          {{ btnModal }}
        </el-button>
      </div>
    </template>
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
        }],
        description: [{
          required: true,
          message: 'Описание задачи не может быть пустым.',
          trigger: 'blur'
        }],
      }
    }
  },
  setup() {
    const storeTasksItems = useTasksItemsStore()
    const {
      isOpenModalEdit,
      titleModal,
      btnModal
    } = storeToRefs(storeTasksItems)
    const {
      closeModal,
      saveModalData
    } = storeTasksItems
    return {
      isOpenModalEdit,
      titleModal,
      btnModal,
      closeModal,
      saveModalData
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