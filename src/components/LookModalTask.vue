<template>

  <el-dialog v-model="storeTasksItems.isOpenModalLook" width="50%" @close="storeTasksItems.closeModal">
    <template #header>
      <div class="my-header">
        <h4 class="header-popup">{{ storeTasksItems.titleModal }}</h4>
      </div>
    </template>

    <el-row>
          <el-col :span="4">Название:</el-col>
          <el-col :span="20">{{ storeTasksItems.tasksItems[storeTasksItems.activeId]?.title }}</el-col>
        </el-row>
    <el-row>
          <el-col :span="4">Описание:</el-col>
          <el-col :span="20">{{ storeTasksItems.tasksItems[storeTasksItems.activeId]?.description }}</el-col>
        </el-row>
    <el-row>
          <el-col :span="4">Создано:</el-col>
          <el-col :span="20">{{ storeTasksItems.tasksItems[storeTasksItems.activeId]?.createAt }}</el-col>
        </el-row>

        
        <el-row v-if="storeTasksItems.tasksItems[storeTasksItems.activeId]?.updateAt.length">
          <el-button type="primary" icon="ArrowDown" @click="visibleOpenHistory" style="margin-left: auto;">
            Журнал изменений</el-button>
        </el-row>
     
        <div v-if="isOpenHistory">
        <el-row>
          <el-col :span="4">Дата</el-col>
          <el-col :span="20">Действия</el-col>
        </el-row>
        <el-row v-for="item in storeTasksItems.tasksItems[storeTasksItems.activeId]?.updateAt" :key="item">
          <el-col :span="4">{{item.dateChange}}</el-col>
          <el-col :span="20">
            <el-row v-for="el in item.actions" :key="el">— {{el}}</el-row>           
          </el-col>
          </el-row>
</div>

    <!-- 
    <el-form v-model="taskForm" ref="refTaskForm">
      <el-form-item label="Название" :label-width="formLabelWidth">
        <el-input v-model="taskForm.title"  placeholder="Введите название задачи" clearable :disabled="storeTasksItems.action == 'look'"/>
      </el-form-item>

      <el-form-item label="Описание" :label-width="formLabelWidth">
        <el-input v-model="taskForm.description" :rows="2" type="textarea" placeholder="Введите описание задачи" :disabled="storeTasksItems.action == 'look'"/>
      </el-form-item>

      <el-form-item label="Категория" :label-width="formLabelWidth">
        <el-select v-model="taskForm.categoryId" placeholder="Выберите категорию" clearable :default="true" :disabled="storeTasksItems.action == 'look'">
          <el-option v-for="item in storeTasksCategories.tasksCategories" :key="item.value" :label="item.label"
            :value="item.value" />
        </el-select>
      </el-form-item>

      <el-form-item label="Приоритет" :label-width="formLabelWidth">
        <el-select v-model="taskForm.priority" placeholder="Выберите приоритет" clearable :default="true" :disabled="storeTasksItems.action == 'look'">
          <el-option v-for="item in storePrioritiesList.prioritiesList" :key="item.value" :label="item.label"
            :value="item.value" />
        </el-select>
      </el-form-item>

      <el-form-item label="Дедлайн" :label-width="formLabelWidth">
        <el-date-picker v-model="taskForm.date" type="date" placeholder="Выберите дату дедлайна" format="DD.MM.YYYY"
          value-format="DD-MM-YYYY" clearable :first-day-of-week="1" :disabled="storeTasksItems.action == 'look'"/>
      </el-form-item> -->

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
      </el-form-item> 
    </el-form>-->
    <!-- <template #footer>
      <div>
        <el-button @click="storeTasksItems.closeModal">Отмена</el-button>
        <el-button type="primary" @click="storeTasksItems.saveModalData(taskForm)">
          {{ storeTasksItems.btnModal }}
        </el-button>
      </div>
    </template> -->
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