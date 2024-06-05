import { defineStore } from 'pinia'

export const useTasksItemsStore = defineStore({
 id: 'tasksItemsStore',
 state: () => ({
  tasksItems: [
   {
    title: 'Разработать минимальный набор для менеджера задач',
    description: 'Функционал: добавление, удаление, получение списка задач, получение одной записи, изменение записи. Запись должна состоять из следующих полей: заголовок, описание, время создания, время изменения, маркер выполнения.',
    categoryId: 0,
    editableTitle: false,
    editableDesc: false,
    priority: 1,
    date: '',
    createAt: '18.05.2024 19:31',
    updateAt: [],
    isDone: true
   },
   {
    title: 'Тестовая задача',
    description: 'Создана для наполнения.',
    categoryId: 0,
    editableTitle: false,
    editableDesc: false,
    priority: 2,
    date: '05.05.2024',
    createAt: '18.05.2024 19:31',
    updateAt: [],
    isDone: false
   },
   {
    title: 'Доработать проект',
    description: 'Добавить группировку задач по категориям, возможность добавления подзадач, расстановки приоритетов.',
    categoryId: 1,
    editableTitle: false,
    editableDesc: false,
    priority: 3,
    date: '',
    createAt: '18.05.2024 19:32',
    updateAt: [],
    isDone: false
   },
  ],
  newItem: {
   title: '',
   description: '',
   categoryId: null,
   editableTitle: false,
   editableDesc: false,
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
  historyAction: {},
  searchTaskParams: '',
  filteredTaskItems: []
 }),
 // getters: {
 //  filtredTask: (state, keyVal) => state.tasksItems.forEach(item => { item.title.includes(keyVal) || item.description.includes(keyVal) }),
 // },
 actions: {
  statusEditableTitle(taskId, data) {
   if (data !== '') {
    if (data && this.tasksItems[taskId].title !== data) {
     let actions = {}
     this.tasksItems[taskId].title = data
     actions.upTitle = `Задача переименована
    из "${this.tasksItems[taskId].description}" в "${data}".`
     this.historyAction.id = this.tasksItems[taskId].updateAt?.length
     this.historyAction.dateChange = this.getNow()
     this.historyAction.actions = actions
     this.tasksItems[taskId].updateAt.push(this.historyAction)
     this.historyAction = {}
     actions = {}
    }
    this.tasksItems[taskId].editableTitle = !this.tasksItems[taskId].editableTitle
    this.filteredTask(this.searchTaskParams)
   }
   return

  },
  statusEditableDesc(taskId, data) {
   if (data !== '') {
    if (data && this.tasksItems[taskId].description !== data) {
     let actions = {}
     this.tasksItems[taskId].description = data
     actions.upDescription = `Описание задачи переименовано
    из "${this.tasksItems[taskId].description}" в "${data}".`
     this.historyAction.id = this.tasksItems[taskId].updateAt?.length
     this.historyAction.dateChange = this.getNow()
     this.historyAction.actions = actions
     this.tasksItems[taskId].updateAt.push(this.historyAction)
     this.historyAction = {}
     actions = {}
    }
    this.tasksItems[taskId].editableDesc = !this.tasksItems[taskId].editableDesc
    this.filteredTask(this.searchTaskParams)
   }
   return
  },
  statusDone(taskId) {
   let actions = {}
   if (this.tasksItems[taskId].isDone) {
    actions.upIsDone = 'Задача отмечена как невыполненная.'
   } else {
    actions.upIsDone = 'Задача отмечена как выполненная.'
   }
   this.historyAction.id = this.tasksItems[taskId].updateAt?.length
   this.historyAction.dateChange = this.getNow()
   this.historyAction.actions = actions
   this.tasksItems[taskId].updateAt.push(this.historyAction)
   this.historyAction = {}
   actions = {}

   return !this.tasksItems[taskId].isDone
  },
  openModal(action, taskId) {
   this.action = action
   if (action == 'add') {
    this.isOpenModalEdit = true
    this.activeId = this.tasksItems.length
    this.titleModal = 'Добавить задачу'
    this.btnModal = 'Добавить'
    this.newItem.categoryId = 0
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
   if (data.title !== '' && data.description !== '') {
    this.activeModalValue.title = data.title
    this.activeModalValue.description = data.description

    if (this.action == 'add') {
     this.activeModalValue.createAt = this.getNow()
     // this.activeModalValue.id = this.tasksItems.length
     this.tasksItems.push(this.activeModalValue)
     this.closeModal()
     this.filteredTask(this.searchTaskParams)
    }
    // else if (this.action == 'edit') {
    //  this.historyChanges(data)
    //  this.activeModalValue.updateAt.push(this.historyAction)
    //  this.tasksItems[this.activeId] = this.activeModalValue
    //  this.closeModal()
    // } else {
    //  this.action == 'look'
    //  this.historyChanges(data)
    //  this.openModal(this.action, data.categoryId, data.taskId)
    //  return
    // }
   }
   return
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
    editableTitle: false,
    editableDesc: false,
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
   this.tasksItems.splice(taskId, 1)
   this.filteredTask(this.searchTaskParams)
  },
  filteredTask(keyVal) {
   this.searchTaskParams = keyVal
   this.filteredTaskItems = []
   //this.tasksItems.forEach((item) => {
   for (let i = 0; i < this.tasksItems.length; i++) {
    if (this.tasksItems[i].title.includes(keyVal) || this.tasksItems[i].description.includes(keyVal)) {
     this.filteredTaskItems.push(this.tasksItems[i]);
    }
   }
   return this.filteredTaskItems;

   // console.log('%c%s', 'color: #364cd9', item.title);
   // console.log('%c%s', 'color: #364cd9', item.title.includes(keyVal) || item.description.includes(keyVal));
   //  if (item.title.includes(keyVal) || item.description.includes(keyVal)) {
   //   return item
   //  }
   // })
  }
 }

})