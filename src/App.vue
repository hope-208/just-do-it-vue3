<template>
  <el-menu class="menu" mode="horizontal" router default-active="1" :active-text-color="activeTextColor">
    <el-menu-item index="1" route="/">Список задач</el-menu-item>
    <el-menu-item index="2" route="/about">О проекте</el-menu-item>
  </el-menu>

  <RouterView />
</template>

<script>
export default {
  data() {
    return {
      activeTextColor: '#2EC995'
    }

  }
}
</script>
