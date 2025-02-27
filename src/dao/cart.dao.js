import Cart from "../models/cart.model.js";

class CartDAO {
  async create(cartData) {
    return await Cart.create(cartData);
  }

  async getByUserId(userId) {
    return await Cart.findOne({ userId }).populate("products.product");
  }

  async getById(cartId) {
    return await Cart.findById(cartId).populate("products.product");
  }

  async create(cartData) {
    return await Cart.create(cartData);
  }

  async update(cartId, cartData) {
    return await Cart.findByIdAndUpdate(cartId, cartData, { new: true });
  }
}

export default CartDAO;
