import CartService from "../services/cart.service.js";

const cartService = new CartService();

export const createCart = async (req, res) => {
  try {
    const newCart = await cartService.createCart(req.user.id);
    res.status(201).json({ message: "Cart created", cart: newCart });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getCartByUserId = async (req, res) => {
  try {
    const cart = await cartService.getCartByUserId(req.user.id);
    if (!cart) return res.status(404).json({ message: "Cart not found" });
    res.json(cart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const addProductToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const updatedCart = await cartService.addProductToCart(
      req.user.id,
      productId,
      quantity
    );
    res.json({ message: "Product added to cart", cart: updatedCart });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const purchaseCart = async (req, res) => {
  try {
    const { cid } = req.params;
    const result = await cartService.purchaseCart(cid, req.user.email);
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
