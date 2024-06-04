<template>
  <el-card class="task">
    <el-row class="task__content">
      {{ storeTasksItems.tasksItems[task] }}
      {{ taskForm }}
      <el-col :span="1" style="max-width: 20px;">
        <el-checkbox v-model="taskForm.isDone" @change="storeTasksItems.statusDone(task)" class="task__check" />
      </el-col>
      <el-col :span="23">
        <el-form ref="refTask" :model="taskForm" :rules="rulesTask">
          <el-row>
            <el-form-item prop="title" class="task__edit">
              <el-input v-if="storeTasksItems.tasksItems[task].editableTitle" v-model="taskForm.title" class='task-name-edit'
                @blur="storeTasksItems.statusEditableTitle(task, taskForm.title)" v-focus clearable :minlength="3" />
              <el-text v-else style="font-weight: 600;" @click="storeTasksItems.statusEditableTitle(task)">{{ taskForm.title
            }}</el-text>
            </el-form-item>
            <div class="task__btns">
              <el-icon>
                <Notification :size="18"
                  @click="storeTasksItems.openModal('look', storeTasksItems.tasksItems[task].categoryId, task)" />
              </el-icon>
              <el-icon :size="18" @click="storeTasksItems.deleteTask(task, $event)">
                <Delete />
              </el-icon>
            </div>
          </el-row>
          <el-form-item prop="description" class="task__edit">
            <el-input v-if="storeTasksItems.tasksItems[task].editableDesc" type="textarea" v-model="taskForm.description" class='task-name-edit'
              @blur="storeTasksItems.statusEditableDesc(task, taskForm.description)" v-focus />
            <el-text v-else @click="storeTasksItems.statusEditableDesc(task)">{{
          storeTasksItems.tasksItems[task].description
          }}</el-text>
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

  <look-modal-task ref="refModalTask" :modalValue="storeTasksItems.activeModalValue" />

</template>

<script setup>
  import {
    useTasksItemsStore
  } from '@/stores/TaskItemsStore'
  const storeTasksItems = useTasksItemsStore()
</script>

<script>
  import LookModalTask from '@/components/LookModalTask.vue';
  export default {
    name: 'TaskItem',
    props: {
      task: Number,
      taskInfo: Object
    },
    components: {
      LookModalTask
    },
    data() {
      return {
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