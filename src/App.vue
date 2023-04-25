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
  background: linear-gradient(60deg, #29323c 0%, #485563 100%);
  height: 100% 
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
  background-color: rgb(102, 101, 101);
  color: #ffffff;
  border-radius: 15px;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #000000;
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
  font-size: 20px;
}

input {
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 20px;
  border: 1px solid #8d8d8d;
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
