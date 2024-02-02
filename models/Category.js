import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    parentCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MakeupCategory'
    },
    subcategories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MakeupCategory'
    }],
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
})

// Create MakeupCategory model
const Category = mongoose.model('Category', CategorySchema);

module.exports = Category;