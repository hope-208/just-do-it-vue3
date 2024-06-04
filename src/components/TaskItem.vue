<template>
  <el-card class="task" v-model="taskId">
    <el-row class="task__content">
      <el-col :span="1" style="max-width: 20px;">
        <el-checkbox v-model="taskForm.isDone" @change="storeTasksItems.statusDone(task)" class="task__check" />
      </el-col>
      <el-col :span="23">
        <el-form ref="refTask" :model="taskForm" :rules="rulesTask">
          <el-row>
            <el-form-item prop="title" class="task__edit">
              <el-input v-if="storeTasksItems.tasksItems[task].editableTitle" v-model="taskForm.title"
                class='task-name-edit' @blur="storeTasksItems.statusEditableTitle(task, taskForm.title)" v-focus
                clearable :minlength="3" />
              <el-popover placement="bottom" :width="250" trigger="hover" content="Нажмите, чтобы отредактировать.">
                <template #reference>
                  <el-text v-if="!storeTasksItems.tasksItems[task].editableTitle" style="font-weight: 600;"
                    @click="storeTasksItems.statusEditableTitle(task)">{{ taskForm.title
            }}</el-text>
                </template>
              </el-popover>
            </el-form-item>
            <div class="task__btns">
              <el-popover placement="bottom" :width="95" trigger="hover" content="Просмотр">
                <template #reference>
                  <el-icon class="task__btn" :size="18">
                    <Notification @click="storeTasksItems.openModal('look', task)" />
                  </el-icon>
                </template>
              </el-popover>
              <el-popover placement="bottom" :width="80" trigger="hover" content="Удалить">
                <template #reference>
                  <el-icon class="task__btn" :size="18" @click="storeTasksItems.deleteTask(tasksItems, task)">
                    <Delete />
                  </el-icon>
                </template>
              </el-popover>
            </div>
          </el-row>
          <el-form-item prop="description" class="task__edit">
            <el-input v-if="storeTasksItems.tasksItems[task].editableDesc" type="textarea"
              v-model="taskForm.description" class='task-name-edit'
              @blur="storeTasksItems.statusEditableDesc(task, taskForm.description)" v-focus />
            <el-popover placement="bottom" :width="250" trigger="hover" content="Нажмите, чтобы отредактировать.">
              <template #reference>
                <el-text v-if="!storeTasksItems.tasksItems[task].editableDesc"
                  @click="storeTasksItems.statusEditableDesc(task)">{{
          storeTasksItems.tasksItems[task].description
          }}</el-text>
              </template>
            </el-popover>
          </el-form-item>
        </el-form>
        <el-row style="display: flex; justify-content: end;">
          <el-text v-if="storeTasksItems.tasksItems[task].updateAt.length == 0">Создано:
            {{ storeTasksItems.tasksItems[task].createAt }}</el-text>
          <el-text v-else>Обновлено:
            {{ storeTasksItems.tasksItems[task].updateAt[storeTasksItems.tasksItems[task].updateAt?.length - 1].dateChange }}
          </el-text>
        </el-row>

      </el-col>
    </el-row>
  </el-card>

</template>

<script setup>
  import {
    useTasksItemsStore
  } from '@/stores/TaskItemsStore'
  const storeTasksItems = useTasksItemsStore()
</script>

<script>
  export default {
    name: 'TaskItem',
    props: {
      task: Number,
      taskInfo: Object
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