import { defineStore } from 'pinia'

export const useSubtaskItemsStore = defineStore({
 id: 'subtaskItemsStore',
 state: () => ({
  subtaskItems: [
   {
    id: 0,
    title: 'subAudi',
    taskId: 0,
    editable: false,
    isDone: false
   },
   {
    id: 1,
    title: 'subBMW',
    taskId: 0,
    editable: false,
    isDone: false
   },
   {
    id: 2,
    title: 'subCat',
    taskId: 1,
    editable: false,
    isDone: false
   },
  ],
  isOpenAddSubtask: false
 }),
 actions: {
  // getItem(id) {
  //  return
  // }
  statusEditable(itemId) {
   this.subtaskItems[itemId].editable = !this.subtaskItems[itemId].editable
  },
  statusDone(itemId) {
   this.subtaskItems[itemId].isDone = !this.subtaskItems[itemId].isDone
  },
  addTask(taskId) {

   console.log('%c%s', 'color: #917399', 'taskId', taskId);
   const newSubtask = {
    id: this.subtaskItems.length,
    title: '',
    taskId: taskId,
    editable: false,
    isDone: false
   }
   this.subtaskItems.push(newSubtask)
   // const itemId = parseInt(evt.dataTransfer.getData('itemId'))
   //    this.storeTasksItems.tasksItems = this.storeTasksItems.tasksItems.map(item => {
   //      if (item.id == itemId)
   //        item.categoryId = categoryId
   //      return item
   //    })
  }
 }
})