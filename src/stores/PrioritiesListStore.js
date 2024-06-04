import { defineStore } from 'pinia'

export const usePrioritiesListStore = defineStore({
 id: 'prioritiesListStore',
 state: () => ({
  prioritiesList: [{
   id: 0,
   value: 0,
   label: 'Срочно',
  },
  {
   id: 1,
   value: 1,
   label: 'Важно, но не срочно',
  },
  {
   id: 2,
   value: 2,
   label: 'На доработку',
  }, {
   id: 3,
   value: 3,
   label: 'Обычно',
  }]
 })
})