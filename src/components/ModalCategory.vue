<template>
  <el-dialog v-model="storeTasksCategories.isOpenModal" width="50%" @close="storeTasksCategories.closeModal, resetForm()">
    <template #header>
      <div class="my-header">
        <h4 class="header-popup">{{ storeTasksCategories.titleModal }}</h4>
      </div>
    </template>
    <el-form v-model="categoryForm">
      {{ categoryForm }}
      {{ modalValue }}
      <el-form-item label="Название" :label-width="formLabelWidth" >
        <el-input v-model="categoryForm.label" placeholder="Введите название категории задачи" :value="modalValue.label" clearable />
      </el-form-item>

      <el-form-item label="Цвет" :label-width="formLabelWidth">
        <el-color-picker v-model="categoryForm.color" size="large" :predefine="predefineColors" :value="modalValue.color" color-format="rgb" />

      </el-form-item>


    </el-form>
    <template #footer>
      <div>
        <el-button @click="storeTasksCategories.closeModal, resetForm()">Отмена</el-button>
        <el-button type="primary" @click="storeTasksCategories.saveModalData(categoryForm), resetForm()">
          {{ storeTasksCategories.btnModal }}
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup>
import { useTasksCategoriesStore } from '@/stores/TasksCategoriesStore'

const storeTasksCategories = useTasksCategoriesStore()
 //let categoryForm = storeTasksCategories.activeModalValue
</script>

<script>
export default {
  name: 'ModalCategory',
  //props: ['modalValue'],
  props: { modalValue: Object },
  // mounted() {
  //   this.categoryForm = {
  //     label: this.modalValue.label,
  //       color: this.modalValue.color
  //   }

  //   console.log('%c%s', 'color: #e57373', this.categoryForm)
  // },
   data() {
    return {
        // categoryForm: this.modalValue      
  //     //    // categoryForm: this.modalValue        

      categoryForm: {
        label: this.modalValue.label,
        color: this.modalValue.color
      }
    }

  },
  methods: {
    resetForm() {
      this.categoryForm = {}
    }
  }
}
</script>