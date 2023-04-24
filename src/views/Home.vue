<template>
  <div class="main-container">
    <div>
      <h1>STIMM</h1>
    </div>
    <form @submit.prevent="addProduct">
      <div>
        <label for="tipo">Tipo:</label>
        <input type="text" id="tipo" v-model="product.tipo" />
      </div>
      <div>
        <label for="modelo">Modelo:</label>
        <input type="text" id="modelo" v-model="product.modelo" />
      </div>
      <div>
        <label for="preco">Preço:</label>
        <input type="number" id="preco" v-model="product.preco" />
      </div>
      <div>
        <label for="quantidade">Quantidade:</label>
        <input type="number" id="quantidade" v-model="product.quantidade" />
      </div>
      <div>
        <label for="imagem">Imagem:</label>
        <input type="text" id="imagem" v-model="product.imagem" />
      </div>
      <button type="submit">Adicionar Produto</button>
    </form>
  </div>
</template>

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

<style scoped></style>
