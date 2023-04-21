<template>
    <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/produtos">Produtos</router-link>
    </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'

export default{
    name: "Navbar" 
}
</script>

<style scoped>
#nav {
    background-color: #222;
    border-bottom:  4px solid #111;
    padding: 15px 50px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

#nav a{
    color: #fff;
    text-decoration: none;
    margin: 12px;
    transform: .5s;
}

#nav a:hover{
    color: #696969
}
</style>