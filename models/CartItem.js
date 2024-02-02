import mongoose from "mongoose";

const CartItemSchema = new mongoose.Schema({
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    quantity: {
        type: Number,
        default: 1
    },
    totalPrice: {
        type: Number,
        required: true
    }
});

const CartItem = mongoose.model('CartItem', CartItemSchema);

module.exports = {
    CartItem
};