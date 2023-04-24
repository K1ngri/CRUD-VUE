<template>
  <div class="main-container">
    <h1>STIMM</h1>
    <table>
      <thead>
        <tr>
          <th>Tipo</th>
          <th>Modelo</th>
          <th>Preço</th>
          <th>Quantidade</th>
          <th>Imagem</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="produto in produtos" :key="produto.id">
          <td>{{ produto.tipo }}</td>
          <td>{{ produto.modelo }}</td>
          <td>{{ produto.preco }}</td>
          <td>{{ produto.quantidade }}</td>
          <td><img :src="produto.imagem" alt=""></td>
          <td>
            <button @click="editProduto(produto)">Editar</button>
            <button @click="deleteProduto(produto)">Excluir</button>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="modal" v-if="modalVisible">
      <div class="modal-content">
        <h2 class="title center">Editar Produto</h2>
        <form>
          <label for="tipo">Tipo:</label>
          <input type="text" id="tipo" v-model="produto.tipo">

          <label for="modelo">Modelo:</label>
          <input type="text" id="modelo" v-model="produto.modelo">

          <label for="preco">Preço:</label>
          <input type="number" id="preco" v-model="produto.preco">

          <label for="quantidade">Quantidade:</label>
          <input type="number" id="quantidade" v-model="produto.quantidade">

          <label for="imagem">Imagem:</label>
          <input type="text" id="imagem" v-model="produto.imagem">

          <button type="button" @click="updateProduto">Salvar</button>
        </form>
      </div>
    </div>
  </div>
</template>


<script>
import ProductService from "@/services.js";

export default {
  name: "Produtos",
  data() {
    return {
      produtos: [],
      modalVisible: false, // adicionando a propriedade
      produto: {} // adicionando a propriedade para armazenar o produto selecionado
    
    };
  },
  mounted() {
    ProductService.getProducts().then((response) => {
      this.produtos = response.data;
    });
  },
  methods: {
    async editProduto(produto) {
      // buscar o produto pelo ID
      const response = await ProductService.getProduct(produto.id)
      const product = response.data

      // preencher o formulário com os dados do produto e mostrar o modal
      this.produto = product
      this.modalVisible = true
    },
    async updateProduto() {
      await ProductService.updateProduct(this.produto.id, this.produto);

      // resetar os campos do formulário e atualizar a lista de produtos
      this.produto = {};
      this.modalVisible = false;
      await this.fetchProducts();
    },
    async deleteProduto(produto) {
      await ProductService.deleteProduct(produto.id);
      await this.fetchProducts();
    },
    async fetchProducts() {
      const response = await ProductService.getProducts();
      this.produtos = response.data;
    },
  },
};
</script>

<style>

</style>