import mongoose from "mongoose";
import { CartItemSchema } from './CartItem'

// Define the schema for the Cart
const CartSchema = new mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    items: [CartItemSchema],
    totalItems: {
        type: Number,
        default: 0
    },
    totalPrice: {
        type: Number,
        default: 0
    }
});

// Create models for Cart and CartItem
const Cart = mongoose.model('Cart', CartSchema);

module.exports = {
    Cart
};