<template>
    <div id="nav">
        <router-link  class="label-nav" to="/">
            <font-awesome-icon class="label-nav-home" icon="fa-solid fa-home" /> Home
        </router-link> |
        <router-link class="label-nav" to="/produtos">
            <font-awesome-icon class="label-nav-home" icon="fa-solid fa-bag-shopping" /> Produtos
        </router-link>
    </div>
</template>

<script>

export default{
    name: "Navbar" 
}
</script>

<style scoped>
#nav {
    background-color: #161616;
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

.label-nav{
    background-color: #161616;
    font-size: 19px;
}

.label-nav-home{
    color:#7c99d0;
    font-size: 30px;
}
</style>