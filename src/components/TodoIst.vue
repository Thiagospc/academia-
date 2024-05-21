<template>
  <div class="TodoIst">
    <div class="px-3 py-10 md:px-10">
        <div class="w-full sm:w-1/2 lg:w-1/3 mx-auto">
          <TodoSpinner />
          <TodoForm />
          <TodoItems />
          <TodoEmpty />
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
  props: {
    msg: String
  }
}
</script>