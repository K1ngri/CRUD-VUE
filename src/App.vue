<template>
  <Navbar />
  <router-view />
</template>

<style>
* {
  font-family: Helvetica;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}


.main-container {
  margin: 50px;
  min-height: 250px;
}

html {
  background-color: #3a3a3a;
}

h1 {
  color: #ffffff;
  text-align: center;
  font-size: 70px;
  margin-bottom: 50px;
}

.modal {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  background-color: #fff;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 50%;
  max-width: 700px;
}

.title {
  margin-bottom: 20px;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 10px;
}

input {
  padding: 5px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
}
</style>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
  mounted() {
    document.title = 'STIMM';
  },
  components: {
    Navbar,
    Footer
  }
}
</script>
