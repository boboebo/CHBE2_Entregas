import ProductRepository from "../repositories/product.repository.js";

class ProductService {
  constructor() {
    this.productRepository = new ProductRepository();
  }

  async getAllProducts() {
    return await this.productRepository.getAll();
  }

  async createProduct(productData) {
    return await this.productRepository.create(productData);
  }
}

export default ProductService;
