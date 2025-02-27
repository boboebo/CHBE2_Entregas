import ProductDAO from "../dao/product.dao.js";

class ProductRepository {
  constructor() {
    this.productDAO = new ProductDAO();
  }

  async getAll() {
    return await this.productDAO.getAll();
  }

  async getById(id) {
    return await this.productDAO.getById(id);
  }

  async create(productData) {
    return await this.productDAO.create(productData);
  }

  async update(id, productData) {
    return await this.productDAO.update(id, productData);
  }

  async delete(id) {
    return await this.productDAO.delete(id);
  }
}

export default ProductRepository;
