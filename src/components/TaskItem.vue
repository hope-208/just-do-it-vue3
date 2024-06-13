<template>
  <el-card class="task">
    <el-form ref="refTask" :model="taskForm" :rules="rulesTask">
    <el-row class="task__content">
      <el-col :span="1" style="max-width: 20px;">
        <el-checkbox v-model="tasksItems[task].isDone" @change="statusDone(task)" class="task__check" />
      </el-col>
      <el-col :span="23">
          <el-row>
            <el-form-item prop="title" class="task__edit">
              <el-input v-if="tasksItems[task].editableTitle" v-model="taskForm.title" class='task-name-edit'
                @blur="statusEditableTitle(task, taskForm.title)" v-focus clearable :minlength="3" />
              <el-popover placement="bottom" :width="250" trigger="hover" content="Нажмите, чтобы отредактировать.">
                <template #reference>
                  <el-text v-if="!tasksItems[task].editableTitle" class="task__title" 
                    @click="statusEditableTitle(task)">{{ taskForm.title
                    }}</el-text>
                </template>
              </el-popover>
            </el-form-item>
            <div class="task__btns">
              <el-popover placement="bottom" :width="95" trigger="hover" content="Просмотр">
                <template #reference>
                  <el-icon class="task__btn" :size="18">
                    <Notification @click="openModal('look', task)" />
                  </el-icon>
                </template>
              </el-popover>
              <el-popover placement="bottom" :width="80" trigger="hover" content="Удалить">
                <template #reference>
                  <el-icon class="task__btn" :size="18" @click="deleteTask(tasksItems, task)">
                    <Delete />
                  </el-icon>
                </template>
              </el-popover>
            </div>
          </el-row>
          <el-form-item prop="description" class="task__edit">
            <el-input v-if="tasksItems[task].editableDesc" type="textarea" v-model="taskForm.description"
              class='task-name-edit' @blur="statusEditableDesc(task, taskForm.description)" v-focus />
            <el-popover placement="bottom" :width="250" trigger="hover" content="Нажмите, чтобы отредактировать.">
              <template #reference>
                <el-text v-if="!tasksItems[task].editableDesc" @click="statusEditableDesc(task)"
                  style="cursor: pointer">{{
                    tasksItems[task].description
                  }}</el-text>
              </template>
            </el-popover>
          </el-form-item>
        <el-row style="display: flex; justify-content: end;">
          <el-text v-if="tasksItems[task].updateAt.length == 0" style="cursor: default">Создано:
            {{ tasksItems[task].createAt }}</el-text>
          <el-text v-else style="cursor: default">Обновлено:
            {{ tasksItems[task].updateAt[tasksItems[task].updateAt?.length - 1].dateChange }}
          </el-text>
        </el-row>

      </el-col>
    </el-row>
    </el-form>
  </el-card>

</template>

<script>
import { storeToRefs } from 'pinia'
import {
  useTasksItemsStore
} from '@/stores/TaskItemsStore'
export default {
  name: 'TaskItem',
  props: {
    task: Number,
    taskInfo: Object
  },
  setup() {
    const storeTasksItems = useTasksItemsStore()
    const { tasksItems } = storeToRefs(storeTasksItems)
    const { openModal, deleteTask, statusEditableTitle, statusEditableDesc, statusDone } = storeTasksItems
    return { tasksItems, openModal, deleteTask, statusEditableTitle, statusEditableDesc, statusDone }
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
      taskId: this.task,
      taskForm: {
        title: this.taskInfo.title,
        description: this.taskInfo.description,
        isDone: this.taskInfo.isDone,
        editableTitle: this.editableTitle,
        editableDesc: this.editableDesc
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
  }
}
</script>