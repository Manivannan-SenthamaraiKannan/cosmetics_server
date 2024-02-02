import mongoose from "mongoose";
import {Product} from "./Product";

const OrderSchema = new mongoose.Schema({
    customerName: {
        type: String,
        required: true
    },
    customerEmail: {
        type: String,
        required: true
    },
    products: [Product], // Embed products within order
    totalPrice: {
        type: Number,
        required: true
    },
    orderDate: {
        type: Date,
        default: Date.now
    }
})

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;