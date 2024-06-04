import { defineStore } from 'pinia'

export const useTasksCategoriesStore = defineStore({
 id: 'tasksCategoriesStore',
 state: () => ({
  tasksCategories: [{
   id: 0,
   value: 0,
   label: 'Cars',
   editable: false,
   color: ''
  },
  {
   id: 1,
   value: 1,
   label: 'Animals',
   editable: false,
   color: ''
  },
  {
   id: 2,
   value: 2,
   label: 'Сделать',
   editable: false
  },
  {
   id: 3,
   value: 3,
   label: 'В работе',
   editable: false,
   color: ''
  },
  {
   id: 4,
   value: 4,
   label: 'Готово/На проверку',
   editable: false
  }, {
   id: 5,
   value: 5,
   label: 'Проверено',
   editable: false,
   color: ''
  }
  ],
  isOpenModal: false,
  newItem: {
   id: null,
   value: null,
   label: '',
   editable: false,
   color: ''
  },
  editItem: {},
  activeModalValue: {},
  titleModal: '',
  btnModal: '',
  activeId: null,
  action: '',
  color: ''
 }),
 actions: {
  getItemContent(itemId) {
   return this.tasksCategories[itemId]
  },
  statusEditable(itemId) {
   this.tasksCategories[itemId].editable = !this.tasksCategories[itemId].editable
  },
  openModal(action, categoryId) {
   this.isOpenModal = true
   this.action = action
   this.activeId = categoryId

   console.log('%c%s', 'color: #d90000', action, categoryId);
   if (action == 'add') {
    this.activeId = this.tasksCategories.length
    this.titleModal = 'Добавить категорию задач'
    this.btnModal = 'Добавить'
    this.newItem.id = this.activeId
    this.newItem.value = this.activeId
    this.activeModalValue = this.newItem
   } else {
    this.titleModal = 'Редактировать категорию задач'
    this.btnModal = 'Сохранить'

    this.editItem = this.tasksCategories[categoryId]
    this.activeModalValue = this.editItem
   }
  },
  saveModalData(data) {

   console.log('%c%s', 'color: #731d1d', 'data', data);
   this.activeModalValue.label = data.label
   this.activeModalValue.color = data.color
   if (this.action == 'add') {
    this.tasksCategories.push(this.activeModalValue)
   } else {
    this.tasksCategories[this.activeId] = this.activeModalValue
   }
   this.closeModal()
  },
  closeModal() {
   this.isOpenModal = false
   this.titleModal = ''
   this.btnModal = ''
   this.newItem = {
    id: null,
    value: null,
    label: '',
    editable: false,
    color: ''
   }
   this.editItem = {}
   this.activeModalValue = {}
   this.activeId = null
   this.action = ''
  }
 }
})