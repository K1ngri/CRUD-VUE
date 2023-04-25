<template>
    <div id="nav">
        <div>
        <font-awesome-icon icon="fa-regular fa-home" />
        <router-link class="label-nav" to="/">Home</router-link>
        </div>
        <router-link class="label-nav" to="/produtos">Produtos</router-link>
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
    font-size: 23px;
}
</style>