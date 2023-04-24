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
          <td><img :src="produto.imagem" alt="" id="imagem"></td>
          <td>
            <button id="editar" @click="editProduto(produto)">Editar</button>
            <button id="excluir" @click="deleteProduto(produto)">Excluir</button>
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
          <input type="text" id="imagem-modal" v-model="produto.imagem">
          <div class="button-container">
            <button id="salvar" type="button" @click="updateProduto">Salvar</button>
            <button id="cancelar" type="button" @click="modalVisible = false">Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
#imagem {
  width: 100%;
  height: 150px;
  object-fit: contain;
}

table {
  margin: auto;
  margin-top: 50px;
  margin-bottom: 50px;
  border-collapse: collapse;
  border: 2px solid rgb(56, 55, 55);
}

th {
  padding: 20px;
  background-color: rgb(102, 101, 101);
  color: #ffffff;
  border: 2px solid rgb(56, 55, 55);
}

td {
  background-color: #bebebe;
  padding: 15px;
  border: 2px solid rgb(56, 55, 55);
}

tr {
  padding: 15px;
  border: 2px solid rgb(56, 55, 55);
}

button[id="editar"],
[id="excluir"],
[id="salvar"],
[id="cancelar"] {
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;
}

.button-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

button:hover {
  background-color: #014996;
}
</style>


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