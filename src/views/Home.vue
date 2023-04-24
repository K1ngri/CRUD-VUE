<template>
  <div class="main-container">
    <div>
      <h1>STIMM</h1>
    </div>
    <form @submit.prevent="addProduct">
      <div class="form-title">
        <h2>Adicione um Produto</h2>
      </div>
      <div class="item-formulario">
        <label for="tipo">Tipo</label>
        <input type="text" id="tipo" v-model="product.tipo" />
      </div>
      <div class="item-formulario">
        <label for="modelo">Modelo</label>
        <input type="text" id="modelo" v-model="product.modelo" />
      </div>
      <div class="item-formulario">
        <label for="preco">Preço</label>
        <input type="number" id="preco" v-model="product.preco" />
      </div>
      <div class="item-formulario">
        <label for="quantidade">Quantidade</label>
        <input type="number" id="quantidade" v-model="product.quantidade" />
      </div>
      <div class="item-formulario">
        <label for="imagem">Imagem</label>
        <input type="text" id="imagem" v-model="product.imagem" />
      </div>
      <button type="submit">Adicionar</button>
    </form>
  </div>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  margin: auto;
  background-color: rgb(102, 101, 101);
  color: #ffffff;
  width: 500px;
  border-radius: 10px;
  padding: 25px;
  box-shadow: 1px 1px 4px rgba(128, 128, 128, 0.479);
}

input {
  padding: 15px;
  border-radius: 5px;
  border: 1px solid rgb(78, 78, 78);
  height: 35px;
  width: 270px;
  resize: none;
  float: right;
  margin-right: 30px;
  margin-bottom: 20px;
}


label {
  background-color: rgb(102, 101, 101);
  font-size: 20px;
  margin-left: 30px;
  margin-bottom: 10px
}

.form-title{
  text-align: center;
  padding: 20px;
  margin-bottom: 20px;
}

button[type="submit"] {
  padding: 10px;
  background-color: #007bff;
  font-size: 20px;
  padding: auto;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: auto;
}

button[type="submit"]:hover {
  background-color: #0069d9;
}
</style>

<script>
import ProductService from "@/services.js";

export default {
  name: 'Home',
  data() {
    return {
      product: {
        tipo: '',
        modelo: '',
        preco: '',
        quantidade: '',
        imagem: '',
      },
    };
  },
  methods: {
    addProduct() {
      ProductService.createProduct(this.product)
        .then(response => {
          console.log(response.data);
          this.resetForm();
        })
        .catch(e => {
          console.log(e);
        });
    },
    resetForm() {
      this.product.tipo = '';
      this.product.modelo = '';
      this.product.preco = '';
      this.product.quantidade = '';
      this.product.imagem = '';
    },
  },
};
</script>


