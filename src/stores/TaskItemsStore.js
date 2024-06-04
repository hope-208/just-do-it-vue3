import { defineStore } from 'pinia'

export const useTasksItemsStore = defineStore({
 id: 'tasksItemsStore',
 state: () => ({
  tasksItems: [
   {
    id: 0,
    title: 'Audi',
    description: 'desk Audi',
    categoryId: 0,
    editable: false,
    priority: 1,
    date: '',
    createAt: '18.05.2024 19:30',
    updateAt: [],
    isDone: false
   },
   {
    id: 1,
    title: 'BMW',
    description: 'desk',
    categoryId: 0,
    editable: false,
    priority: 2,
    date: '05.05.2024',
    createAt: '18.05.2024 19:30',
    updateAt: [],
    isDone: false
   },
   {
    id: 2,
    title: 'Cat',
    description: 'desk Cat',
    categoryId: 1,
    editable: false,
    priority: 3,
    date: '',
    createAt: '18.05.2024 19:30',
    updateAt: [],
    isDone: false
   },
  ],
  newItem: {
   id: null,
   title: '',
   description: '',
   categoryId: null,
   editable: false,
   priority: 3,
   date: '',
   createAt: '',
   updateAt: [],
   isDone: false
  },
  editItem: {},
  activeModalValue: {},
  isOpenModalLook: false,
  isOpenModalEdit: false,
  titleModal: '',
  btnModal: '',
  activeId: null,
  action: '',
  historyAction: {}
 }),
 actions: {
  statusEditable(taskId) {
   return this.tasksItems[taskId].editable = !this.tasksItems[taskId].editable
  },
  statusDone(taskId) {
   //this.tasksItems[taskId].isDone = !this.tasksItems[taskId].isDone
   return !this.tasksItems[taskId].isDone
  },
  dropTask(categoryId, taskId) {

   console.log('%c%s', 'color: #f200e2', 'taskId, categoryId', categoryId, taskId);
   return this.tasksItems[taskId].categoryId = categoryId
  },
  openModal(action, categoryId, taskId) {

   this.action = action

   console.log('%c%s', 'color: #d90000', action, categoryId, taskId);
   if (action == 'add') {
    this.isOpenModalEdit = true
    this.activeId = this.tasksItems.length
    this.titleModal = 'Добавить задачу'
    this.btnModal = 'Добавить'
    this.newItem.id = this.activeId
    this.newItem.categoryId = categoryId
    this.activeModalValue = this.newItem

   } else if (action == 'edit') {
    this.isOpenModalEdit = true
    this.titleModal = 'Редактировать задачу'
    this.btnModal = 'Сохранить'
    this.activeId = taskId
    this.editItem = this.tasksItems[taskId]
    this.activeModalValue = this.editItem

   } else {
    this.titleModal = 'Просмотр задачи'
    this.btnModal = 'Редактировать'
    this.activeId = taskId
    this.isOpenModalLook = true
   }
  },
  getNow() {
   let now = new Date();
   let day
   if (now.getDate() < 10) {
    day = '0' + now.getDate()
   } else { day = now.getDate() }

   let month
   if (now.getMonth() + 1 < 10) {
    month = '0' + (now.getMonth() + 1)
   } else { month = now.getMonth() + 1 }

   let year = now.getFullYear()
   let hours
   if (now.getHours() < 10) {
    hours = '0' + now.getHours()
   } else { hours = now.getHours() }
   let min
   if (now.getMinutes() < 10) {
    min = '0' + now.getMinutes()
   } else { min = now.getMinutes() }

   return `${day}.${month}.${year} ${hours}:${min}`
  },
  historyChanges(data) {

   let actions = {}
   if (this.activeModalValue.title !== data.title)
    actions.upTitle = `Задача переименована
   из "${this.activeModalValue.title}" в "${data.title}".`
   if (this.activeModalValue.description !== data.description) {
    if (this.activeModalValue.description == '') {
     actions.upDescription = `Добавлено описание задачи "${data.description}".`
    } else {
     actions.upDescription = `Описание задачи переименовано из "${this.activeModalValue.description}" в "${data.description}".`
    }
   }

   if (this.activeModalValue.categoryId !== data.categoryId)
    actions.categoryId = `Категория задачи изменена с "${this.activeModalValue.categoryId}" на "${data.categoryId}".`
   if (this.activeModalValue.priority !== data.priority)
    actions.upPriority = `Приоритет задачи изменен с "${this.activeModalValue.priority}" на "${data.priority}".`
   if (this.activeModalValue.date !== data.date) {
    if (this.activeModalValue.date == '') {
     actions.upDate = `К задаче добавлен дедлайн "${data.date}".`
    } else {
     actions.upDate = `Дедлайн задачи изменена с "${this.activeModalValue.date}" на "${data.date}".`
    }
   }

   if (this.activeModalValue.isDone !== data.isDone) {
    if (this.activeModalValue.isDone) {
     actions.upIsDone = 'Задача отмечена как невыполненная.'
    } else {
     actions.upIsDone = 'Задача отмечена как выполненная.'
    }

   }
   if (this.historyAction) {
    this.historyAction.id = this.activeModalValue.updateAt?.length
    this.historyAction.dateChange = this.getNow()
    this.historyAction.actions = actions
   }
  },
  saveModalData(data) {

   console.log('%c%s', 'color: #731d1d', 'data', data);
   this.historyChanges(data)
   this.activeModalValue.title = data.title
   this.activeModalValue.description = data.description
   this.activeModalValue.categoryId = data.categoryId
   this.activeModalValue.priority = data.priority
   this.activeModalValue.date = data.date

   if (this.action == 'add') {
    this.activeModalValue.createAt = this.getNow()
    this.tasksItems.unshift(this.activeModalValue)
    this.closeModal()
   }
   else if (this.action == 'edit') {

    this.activeModalValue.updateAt.push(this.historyAction)
    this.tasksItems[this.activeId] = this.activeModalValue
    this.closeModal()
   } else {
    this.action == 'edit'
    this.openModal(this.action, data.categoryId, data.taskId)
    return
   }

  },
  closeModal() {
   this.isOpenModalLook = false
   this.isOpenModalEdit = false
   this.titleModal = ''
   this.btnModal = ''
   this.newItem = {
    id: null,
    title: '',
    description: '',
    categoryId: null,
    editable: false,
    priority: 3,
    date: '',
    createAt: '',
    updateAt: [],
    isDone: false
   }
   this.editItem = {}
   this.activeModalValue = {}
   this.historyAction = {}
   this.activeId = null
   this.action = ''
  },
  deleteTask(taskId) {

   console.log('%c%s', 'color: #006dcc', taskId);
   this.tasksItems.splice(taskId, 1)
  }
 }

})