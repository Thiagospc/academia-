<template>
    <header class="header">
        <div>
            <div>
                {{ fullName }}
            </div>
        </div>

        <div v-for="(todo, index) in todos" :key="index">
            <input 
            v-model="todo.completed"
            type="checkbox"
            >
            <span>{{ todo.title }}</span>
        </div>

        <div>
            <button
            v-on:click="onClick()"
            >Butão</button>
        </div>
    </header>
</template>

<script>
export default {
    name: 'App',
    data(){
        return{
            user: {
                first_name: 'Thiago',
                last_name: 'Santos Pinheiro Costa'
            },
            todos: [
                {
                    "userId": 1,
                    "id": 1,
                    "title": "delectus aut autem",
                    "completed": true
                },
                {
                    "userId": 1,
                    "id": 2,
                    "title": "quis ut nam facilis et officia qui",
                    "completed": true
                },
                {
                    "userId": 1,
                    "id": 3,
                    "title": "fugiat veniam minus",
                    "completed": false
                },
                {
                    "userId": 1,
                    "id": 4,
                    "title": "et porro tempora",
                    "completed": true
                },
                {
                    "userId": 1,
                    "id": 5,
                    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
                    "completed": false
                }
            ]
        }
    },

    computed: {
        fullName(){
            return `${this.user.first_name} ${this.user.last_name}`
        },

        completoTodos(){
            return this.todos.filter(todo => !todo.completed)
        }
    },

    methods: {
        onClick(){
            console.log('teste')
        }
    }

}
</script>

<style>
    .header {
        
    }
    .todo-item{
        background-color: black;
        color: #fff;
        margin: 0 0 5px 0;
        padding: 3px 6px;
    }
</style> 