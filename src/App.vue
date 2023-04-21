<template>
  <Navbar />
  <router-view />
</template>

<style>
*{
  font-family: Helvetica;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.main-container {
  margin: 50px;
  min-height: 250px;
}

h1{
    color: #222;
    text-align: center;
    font-size: 42px;
    margin-bottom: 30px;
}
</style>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Navbar,
    Footer
  }
}
</script>
