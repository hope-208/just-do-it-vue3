<template>
  <el-card v-for="category in storeTasksCategories.tasksCategories" :key="category.id" class="droppable task-container"
    @drop="storeTasksItems.dropTask(category.id, dropTaskId)" @dragover.prevent @dragenter.prevent>
    <el-row class="task__name">
      {{ category }}
      <el-button class="task__btn-dropdown">
        <el-icon>
          <CaretBottom :size="18" />
        </el-icon>
      </el-button>
      <input v-if="category.editable" v-model="category.label" class='task-name-edit'
        @blur="storeTasksCategories.statusEditable(category.id)" v-focus>
      <el-text v-else @click="storeTasksCategories.statusEditable(category.id)">{{ category.label }}</el-text>
      <div>
        <el-icon :size="18" @click="storeTasksCategories.openModal('edit', category.id)">
          <Edit />
        </el-icon>
      </div>
    </el-row>
    <el-row class="task__add">
      <el-link class="task__add-link" @click="storeTasksItems.openModal('add', category.id, false)">
        <el-icon>
          <Plus />
        </el-icon> Добавить задачу
      </el-link>
    </el-row>
    <task-item v-for="item in storeTasksItems.tasksItems.filter(x => x.categoryId === category.id)" :key="item.id"
      :task="item.id" @dragstart="onDragStart($event, item)" :draggable="true" />
  </el-card>

  <!-- <modal-category ref="refModalCategory" :model-value="storeTasksCategories.isOpenModal"
    @update:model-value="storeTasksCategories.isOpenModal" :modalValue="storeTasksCategories.activeModalValue" /> -->

    <edit-modal-task ref="refModalTask"  :modalValue="storeTasksItems.activeModalValue" :categoryId="category"/>

</template>

<script setup>
import {
  useTasksCategoriesStore
} from '@/stores/TasksCategoriesStore'
import {
  useTasksItemsStore
} from '@/stores/TaskItemsStore'

const storeTasksCategories = useTasksCategoriesStore()
const storeTasksItems = useTasksItemsStore()
</script>

<script>
import TaskItem from '@/components/TaskItem.vue';
//import ModalCategory from '@/components/ModalCategory.vue';
import EditModalTask from '@/components/EditModalTask.vue';

export default {
  name: 'TaskCategory',
  components: {
    TaskItem,
    EditModalTask
    //ModalCategory
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
      dropTaskId: null,
    }
  },
  methods: {
    onDragStart(evt, item) {
      console.log('%c%s', 'color: #e50000', 'evt, item', evt, item)
      evt.dataTransfer.dropEffect = 'move'
      evt.dataTransfer.effectAllowed = 'move'
      this.dropTaskId = item.id.toString()
      //  evt.dataTransfer.setData('itemId', )
    },
    onDrop(evt, categoryId) {
      console.log('%c%s', 'color: #733d00', 'evt, categoryId', evt, categoryId)
      storeTasksItems.addTask(categoryId)
      // const itemId = parseInt(evt.dataTransfer.getData('itemId'))
      // this.storeTasksItems.tasksItems = this.storeTasksItems.tasksItems.map(item => {
      //   if (item.id == itemId)
      //     item.categoryId = categoryId
      //   return item
      // })
    }
  }
}
</script>