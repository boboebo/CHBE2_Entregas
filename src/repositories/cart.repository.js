import CartDAO from "../dao/cart.dao.js";

class CartRepository {
  constructor() {
    this.cartDAO = new CartDAO();
  }

  async create(cartData) {
    return await this.cartDAO.create(cartData);
  }

  async getByUserId(userId) {
    return await this.cartDAO.getByUserId(userId);
  }

  async create(cartData) {
    return await this.cartDAO.create(cartData);
  }

  async update(cartId, cartData) {
    return await this.cartDAO.update(cartId, cartData);
  }

  async getById(cartId) {
    return await this.cartDAO.getById(cartId);
  }

  async update(cartId, cartData) {
    return await this.cartDAO.update(cartId, cartData);
  }
}

export default CartRepository;
