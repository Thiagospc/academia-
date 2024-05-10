<template>
    <header class="header">
        <div>
            <input 
            v-model="name"
            type="text"><br />
            {{ name }}
            <br />
        </div>
        <img v-bind:src="imgUrl" v-bind:alt="imgAlt">
        <div v-for="obj in todos" v-bind:key="obj.id" class="todo-item">
            {{ obj.id }}
            {{ obj.title }}
            {{ obj.completed }}
        </div>
        <div>
            <button
            v-on:click="onClick()"
            >Butão</button>
        </div>
        <div
        @mouseover="onMouseOver"
        @mouseout="onMouseOut"
        >onMouseOver
            
        </div>
    </header>
</template>

<script>
export default {
    name: 'App',
    data(){
        return{
            name: 'Thiago',
            imgUrl: 'https://placehold.co/600x400',
            imgAlt: 'Foto 600x400',
            todos: [
                {
                    "userId": 1,
                    "id": 1,
                    "title": "delectus aut autem",
                    "completed": false
                },
                {
                    "userId": 1,
                    "id": 2,
                    "title": "quis ut nam facilis et officia qui",
                    "completed": false
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

    methods: {
        onClick(){
            console.log('teste')
        },
        onMouseOver(){
            console.log('onMouseOver')
        },
        onMouseOut(){
            console.log("onMouseOut")
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