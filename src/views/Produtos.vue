<template>
  <div class="main-container">
    <h1>STIMM</h1>
    <div class="pesquisar">
      <input type="text" id="search" v-model="filtroModelo" @input="filterProdutos" placeholder="Buscar por modelo">
    </div>
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
        <tr v-for="produto in filteredProdutos" :key="produto.id">
          <td>{{ produto.tipo }}</td>
          <td>{{ produto.modelo }}</td>
          <td>{{ produto.preco }}</td>
          <td>{{ produto.quantidade }}</td>
          <td><img :src="produto.imagem" alt="" id="imagem"></td>
          <td>
            <button id="editar" @click="editProduto(produto)">
              <font-awesome-icon icon="fa-regular fa-pen-to-square" /></button>
            <button id="excluir" @click="deleteProduto(produto)">
              <font-awesome-icon icon="fa-regular fa-trash-can" /></button>
          </td>
        </tr>
        
      </tbody>
    </table>

    <div class="modal" v-if="modalVisible">
      <div class="modal-content">
        <h2 id="title-center">Editar Produto</h2>
        <form>
          <label for="tipo">Tipo</label>
          <input type="text" id="tipo" v-model="produto.tipo">

          <label for="modelo">Modelo</label>
          <input type="text" id="modelo" v-model="produto.modelo">

          <label for="preco">Preço</label>
          <input type="number" id="preco" v-model="produto.preco">

          <label for="quantidade">Quantidade</label>
          <input type="number" id="quantidade" v-model="produto.quantidade">

          <label for="imagem">Imagem</label>
          <input type="text" id="imagem-modal" v-model="produto.imagem">
          <div class="button-container">
            <i class="fa-solid fa-pen"></i>
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
}

th {
  padding: 20px;
  border-radius: 10px;
  background-color: #2a3747;
  color: #ffffff;
}

td {
  background-color: #bebebe;
  padding: 15px;
  border-radius: 10px;
  border: 2px solid #2a3747;
}

tr {
  padding: 15px;
}

h2[id="title-center"]{
  font-size: 35px;
  text-align: center;
  margin-bottom: 10px;
}


.pesquisar{
  color: #ffffff;
  display: flex;
  justify-content: center;
}

#search{
  margin-left: 5px;
  font-size: 18px;
}

button[id="editar"],
[id="excluir"] {
  padding: 10px;
  background-color: transparent;
  color: #415875;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;
  font-size: 24px;
}

button[id="salvar"],
[id="cancelar"] {
  padding: 10px;
  background-color: #415875;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;
  font-size: 24px;
}

.button-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

button:hover[id="editar"]  {
  background-color: transparent;
  color: aliceblue;
}

button:hover[id="excluir"]  {
  background-color: transparent;
  color: aliceblue;
}

button:hover[id="salvar"] {
  background-color: #586e8b;
  color: rgb(252, 252, 252);
}

button:hover[id="cancelar"] {
  background-color: #586e8b;
  color: rgb(252, 252, 252);
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
      produto: {}, // adicionando a propriedade para armazenar o produto selecionado
      filtroModelo: "",
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
    filterProdutos() {
      const filtro = this.filtroModelo.toLowerCase().trim();
      this.produtos = this.produtos.filter(
        (produto) => produto.modelo.toLowerCase().includes(filtro)
      );
    },
  },
  watch: {
    filtroModelo: function (newValue, oldValue) {
      // atualizar a lista de produtos sempre que houver uma alteração no filtro de modelo
      ProductService.getProductsByModel(newValue).then((response) => {
        this.produtos = response.data;
      });
    },
  },
  computed: {
  filteredProdutos() {
    return this.produtos.filter(produto => {
      return produto.modelo.toLowerCase().includes(this.filtroModelo.toLowerCase());
    });
  }
},
};
</script>