<template>
    <div>
        <h1>Anotações</h1>
        {{ teste }}
    </div>
</template>

<script>
export default {
    name: 'App',
    data(){
        return{
            teste: 'teste string'
        }
    },
    // -> Life Cycle de um componente vue.js

    // Criação
        // - Preparar o componete.
        // - Ajax inicializa algumas variáveis.
        // - Não tem acesso ao DOM.
    // Montagem
        // - Inicializa uma lib externa
        // - Tem acesso ao DOM
    // Atualização
        // - Debug
        // - Updade
    // Desmontagem
        // - Remover o que for necessário (lib->destroy)
        // - Para liberar memória.


    // -> Para interagir com essas fases, temos os HOOKS
    beforeUpdate(){
        console.log('beforeUpdate')
        console.log('Estado: ', this.teste)
        console.log('DOM: ', this.$el)
        console.log("++++++++++++++++++++++++++++++++++++++++++++")
    },
    updated(){
        console.log('updated')
        console.log('Estado: ', this.teste)
        console.log('DOM: ', this.$el)
        console.log("++++++++++++++++++++++++++++++++++++++++++++")
    },
    beforeCreate() {
        console.log('beforeCreate')
        console.log('Estado: ', this.teste)
        console.log('DOM: ', this.$el)
        console.log("++++++++++++++++++++++++++++++++++++++++++++")
    },
    created(){
        console.log('created')
        console.log('Estado: ', this.teste)
        console.log('DOM: ', this.$el)
        console.log("++++++++++++++++++++++++++++++++++++++++++++")
    },
    beforeMount(){
        console.log('beforeMount')
        console.log('Estado: ', this.teste)
        console.log('DOM: ', this.$el)
        console.log("++++++++++++++++++++++++++++++++++++++++++++")
    },
    mounted(){
        console.log('mounted')
        console.log('Estado: ', this.teste)
        console.log('DOM: ', this.$el)
        console.log("++++++++++++++++++++++++++++++++++++++++++++")
    },
    beforeUnmount() {
        console.log('beforeUnmount')
        console.log('Estado: ', this.teste)
        console.log('DOM: ', this.$el)
        console.log("++++++++++++++++++++++++++++++++++++++++++++")
    },
    unmounted(){
        console.log('unmounted')
        console.log('Estado: ', this.teste)
        console.log('DOM: ', this.$el)
        console.log("++++++++++++++++++++++++++++++++++++++++++++")
    }
}


</script>

<style>

</style>
