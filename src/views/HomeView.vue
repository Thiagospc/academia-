<template>
  <div class="home">
    <TodoIst />
  </div>
</template>

<script>
import TodoIst from '@/components/TodoIst.vue'

export default {
  name: 'HomeView',
  components: {
    TodoIst
  }
}
</script>
