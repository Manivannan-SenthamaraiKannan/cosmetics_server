import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    brand: String,
    category: {
        type: String,
        enum: ['Foundation', 'Lipstick', 'Eyeshadow', 'Mascara', 'Blush', 'Eyeliner', 'Concealer', 'Powder', 'Highlighter', 'Others']
    },

    price: {
        type: Number,
        required: true,
        min: 0
    },

    description: String,

    ingredients: [String],

    colors: [String],

    rating: {
        type: Number,
        min: 0,
        max: 5
    },

    imageURLs: [String],

    createdAt: {
        type: Date,
        default: Date.now
    }
})

// Create Product model from schema
const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;