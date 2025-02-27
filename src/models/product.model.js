import { Schema, model } from "mongoose";

const productSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true, min: 0 },
    category: { type: String, required: true },
    imageUrl: { type: String },
  },
  { timestamps: true }
);

export default model("Product", productSchema);
