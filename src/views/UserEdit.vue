<template>
    <div>
        Editar user
        <pre>
            {{ $route.params.id }}
        </pre>
    </div>
</template>

<style>
</style>

<script>

export default {
    created(){
        console.log(this.$route)
    }
    
}
</script>