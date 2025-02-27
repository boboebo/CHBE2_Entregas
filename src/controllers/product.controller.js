import ProductService from "../services/product.service.js";

const productService = new ProductService();

export const getAllProducts = async (req, res) => {
  try {
    const products = await productService.getAllProducts();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createProduct = async (req, res) => {
  try {
    const newProduct = await productService.createProduct(req.body);
    res.status(201).json({ message: "Product created", product: newProduct });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
