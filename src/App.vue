<template>
  <div>
    <div v-for="category in categories" :key="category.id" @drop="onDrop($event, category.id)" class="droppable"
      @dragover.prevent @dragenter.prevent>
      <h4>{{ category.title }}</h4>
      <div v-for="item in items.filter(x => x.categoryId === category.id)" :key="item.id" @dragstart="onDragStart($event, item)"
        class="draggable" :draggable="true">
        <h5>{{ item.title }}</h5>
      </div>
    </div>
  </div>
  <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>

  <RouterView /> -->
</template>

<script>
// import { RouterLink, RouterView } from 'vue-router'

export default {
  data() {
    return {
      items: [
        {
          id: 0,
          title: 'Audi',
          categoryId: 0
        },
        {
          id: 1,
          title: 'BMW',
          categoryId: 0
        },
        {
          id: 2,
          title: 'Cat',
          categoryId: 1
        },
      ],
      categories: [
        {
          id: 0,
          title: 'Cars'
        },
        {
          id: 1,
          title: 'Animals'
        }
      ]
    }
  },
  methods: {
    onDragStart(evt, item) {
      evt.dataTransfer.dropEffect = 'move'
      evt.dataTransfer.effectAllowed = 'move'
      evt.dataTransfer.setData('itemId', item.id.toString())
    },
    onDrop(evt, categoryId) {
      const itemId = parseInt(evt.dataTransfer.getData('itemId'))
      this.items = this.items.map(item => {
        if (item.id == itemId)
          item.categoryId = categoryId
        return item
      })
    }
  }
}
</script>

<style scoped>
.droppable {
  padding: 15px;
  border-radius: 5px;
  background: #2c3e50;
  margin-bottom: 10px;
}

.droppable h4 {
  color: white;
}

.draggable {
  background: white;
  padding: 5px;
  border-radius: 5px;
  margin-bottom: 5px;
}

.draggable h5 {
  margin: 0;
}
</style>