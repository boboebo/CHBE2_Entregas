import CartRepository from "../repositories/cart.repository.js";
import ProductRepository from "../repositories/product.repository.js";
import TicketService from "./ticket.service.js";

class CartService {
  constructor() {
    this.cartRepository = new CartRepository();
    this.productRepository = new ProductRepository();
    this.ticketService = new TicketService();
  }

  async createCart(userId) {
    return await this.cartRepository.create({ userId, products: [] });
  }

  async getCartByUserId(userId) {
    return await this.cartRepository.getByUserId(userId);
  }

  async addProductToCart(userId, productId, quantity) {
    const cart = await this.cartRepository.getByUserId(userId);
    if (!cart) throw new Error("Cart not found");

    const productIndex = cart.products.findIndex(
      (p) => p.product.toString() === productId
    );
    if (productIndex !== -1) {
      cart.products[productIndex].quantity += quantity;
    } else {
      cart.products.push({ product: productId, quantity });
    }

    return await this.cartRepository.update(cart._id, cart);
  }

  async purchaseCart(cartId, purchaserEmail) {
    const cart = await this.cartRepository.getById(cartId);
    if (!cart) throw new Error("Cart not found");

    let totalAmount = 0;
    let purchasedProducts = [];
    let failedProducts = [];

    for (const item of cart.products) {
      const product = await this.productRepository.getById(item.product._id);

      if (product && product.stock >= item.quantity) {
        // Restar stock
        product.stock -= item.quantity;
        await this.productRepository.update(product._id, {
          stock: product.stock,
        });

        // Sumar al total de la compra
        totalAmount += product.price * item.quantity;
        purchasedProducts.push(item.product._id);
      } else {
        failedProducts.push(item.product._id);
      }
    }

    if (purchasedProducts.length > 0) {
      // Generar ticket
      await this.ticketService.createTicket(purchaserEmail, totalAmount);
    }

    // Filtrar del carrito los productos comprados
    cart.products = cart.products.filter((p) =>
      failedProducts.includes(p.product._id)
    );
    await this.cartRepository.update(cart._id, cart);

    return {
      message: "Purchase completed",
      totalAmount,
      failedProducts,
    };
  }
}

export default CartService;
