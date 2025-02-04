import { Schema, model } from "mongoose";

const cartSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    products: {
        type: Array,
        required: true
    },
    userId: {
        type: String,
        required: true
    }
});