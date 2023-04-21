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
  </div>
</template>

<script>
import ProductService from "@/services.js";

export default {
  name: "Produtos",
  data() {
    return {
      produtos: [],
    };
  },
  mounted() {
    ProductService.getProducts().then((response) => {
      this.produtos = response.data;
    });
  },
  methods: {
    async editProduto(id) {
      // buscar o produto pelo ID
      const response = await productService.getProduct(id)
      const product = response.data

      // preencher o formulário com os dados do produto
      this.tipo = product.tipo
      this.modelo = product.modelo
      this.preco = product.preco

      // atualizar o produto após a edição
      await productService.updateProduct(id, {
        tipo: this.tipo,
        modelo: this.modelo,
        preco: this.preco
      })

      // resetar os campos do formulário e atualizar a lista de produtos
      this.tipo = ''
      this.modelo = ''
      this.preco = ''
      await this.fetchProducts()
    },
    async deleteProduto(id) {
      await productService.deleteProduct(id)
      // atualizar a lista de produtos após excluir um
      await this.fetchProducts()
    },
  },
};
</script>