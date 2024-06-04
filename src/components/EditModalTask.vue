<template>

  <el-dialog v-model="storeTasksItems.isOpenModalEdit" width="50%" @close="storeTasksItems.closeModal">
    <template #header>
      <div class="my-header">
        <h4 class="header-popup">{{ storeTasksItems.titleModal }}</h4>
      </div>
    </template>
    {{ categoryId }}
    {{ taskForm }}
    {{ modalValue }}
    <el-form v-model="taskForm" ref="refTaskForm">
      <el-form-item label="Название" :label-width="formLabelWidth">
        <el-input v-model="taskForm.title"  placeholder="Введите название задачи" clearable/>
      </el-form-item>

      <el-form-item label="Описание" :label-width="formLabelWidth">
        <el-input v-model="taskForm.description" :rows="2" type="textarea" placeholder="Введите описание задачи"/>
      </el-form-item>

      <el-form-item label="Категория" :label-width="formLabelWidth">
        <el-select v-model="taskForm.categoryId" placeholder="Выберите категорию" clearable :default="true">
          <el-option v-for="item in storeTasksCategories.tasksCategories" :key="item.value" :label="item.label"
            :value="item.value" />
        </el-select>
      </el-form-item>

      <el-form-item label="Приоритет" :label-width="formLabelWidth">
        <el-select v-model="taskForm.priority" placeholder="Выберите приоритет" clearable :default="true">
          <el-option v-for="item in storePrioritiesList.prioritiesList" :key="item.value" :label="item.label"
            :value="item.value" />
        </el-select>
      </el-form-item>

      <el-form-item label="Дедлайн" :label-width="formLabelWidth">
        <el-date-picker v-model="taskForm.date" type="date" placeholder="Выберите дату дедлайна" format="DD.MM.YYYY"
          value-format="DD-MM-YYYY" clearable :first-day-of-week="1"/>
      </el-form-item>

      <!-- <el-form-item label="Файлы" :label-width="formLabelWidth">
        <el-upload v-model:file-list="addTaskForm.fileList" class="upload-demo"
          action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15" list-type="picture-card" drag multiple
          :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
          <el-icon class="el-icon--upload"><upload-filled /></el-icon>
          <div class="el-upload__text">
            Перетащите файл(ы) сюда <em>или нажмите, чтобы загрузить</em>
          </div>
          <template #tip>
            <div class="el-upload__tip">
              файлы jpg/png размером менее 500 КБ
            </div>
          </template>
           <el-icon>
            <Plus />
          </el-icon> 
        </el-upload>

        <el-dialog v-model="dialogVisibleDownload">
          <img w-full :src="dialogImageUrl" alt="Preview Image" />
        </el-dialog>
      </el-form-item> -->
    </el-form>
    <template #footer>
      <div>
        <el-button @click="storeTasksItems.closeModal">Отмена</el-button>
        <el-button type="primary" @click="storeTasksItems.saveModalData(taskForm)">
          {{ storeTasksItems.btnModal }}
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup>
import { useTasksCategoriesStore } from '@/stores/TasksCategoriesStore'
import { useTasksItemsStore } from '@/stores/TaskItemsStore'
import { usePrioritiesListStore } from '@/stores/PrioritiesListStore'

const storeTasksCategories = useTasksCategoriesStore()
const storeTasksItems = useTasksItemsStore()
const storePrioritiesList = usePrioritiesListStore()
</script>


<script>

export default {
  name: 'EditModalTask',
  props: ['modalValue', 'categoryId'],
  created() {
   this.taskForm = 
         this.modalValue
  },
  data() {
    return {
      formLabelWidth: '100',
      // taskForm: {},
      taskForm: {
      },
      category: this.categoryId
      // addTaskForm: {
      //   name: '',
      //   category: 'Сделать',
      //   priority: 'Обычно',
      //   date: '',
      //   fileList: [
      //     {
      //       name: 'food.jpeg',
      //       url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
      //     },
      //     {
      //       name: 'food.jpeg',
      //       url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
      //     }
      //   ]
      // },

      // priorities: [{
      //   value: 1,
      //   label: 'Срочно',
      // },
      // {
      //   value: 2,
      //   label: 'С фиксированной датой',
      // },
      // {
      //   value: 3,
      //   label: 'Важно, но не срочно',
      // }, {
      //   value: 4,
      //   label: 'Обычно',
      // }
      // ]
      // dialogVisibleDownload: false,
      // dialogImageUrl: ''
    }
  },
  // methods: {
  //   handlePictureCardPreview(uploadFile) {
  //     this.dialogImageUrl = uploadFile.url
  //     this.dialogVisibleDownload = true
  //   }
  // },
}

</script>