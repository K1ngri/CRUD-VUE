import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:5432',
  headers: {
    'Content-Type': 'application/json'
  }
})

export default {
  getProducts() {
    return apiClient.get('/produtos')
  },
  getProduct(id) {
    return apiClient.get(`/produtos/${id}`)
  },
  createProduct(product) {
    return apiClient.post('/produtos', product)
  },
  updateProduct(id, product) {
    return apiClient.put(`/produtos/${id}`, product)
  },
  deleteProduct(id) {
    return apiClient.delete(`/produtos/${id}`)
  }
}
