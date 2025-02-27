import { Schema, model } from "mongoose";

const ticketSchema = new Schema(
  {
    code: { type: String, unique: true, required: true },
    purchase_datetime: { type: Date, default: Date.now },
    amount: { type: Number, required: true },
    purchaser: { type: String, required: true }, // Email del comprador
  },
  { timestamps: true }
);

export default model("Ticket", ticketSchema);
