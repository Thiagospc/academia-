<template>
  <div class="TodoIst">
    <div class="px-3 py-10 md:px-10">
        <div class="w-full sm:w-1/2 lg:w-1/3 mx-auto">
          <TodoSpinner v-if="loading" />
          <template v-else>
            <TodoForm />
            <TodoItems v-if="$store.state.todos.length"/>
            <TodoEmpty v-else/>
          </template>
        </div>
    </div>
  </div>
</template>

<script>
import TodoSpinner from './TodoSpinner.vue'
import TodoForm from './TodoForm.vue'
import TodoItems from './TodoItems.vue'
import TodoEmpty from './TodoEmpty.vue'

export default {
  name: 'TodoIst',
  components: {
    TodoSpinner,
    TodoForm,
    TodoItems,
    TodoEmpty
  },
  data() {
    return {
      loading: false
    }
  },
  // jogando minha api para o vuex
  async created(){
    this.loading = true
    this.$store.dispatch('getTodos').finally(() => {
      this.loading = false;
    })
  }
}
</script>