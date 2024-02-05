import mongoose from "mongoose";

// Define the schema for a wishlist item
const WishlistItemSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product', // Assuming 'Product' is the model name for products
        required: true
    },
    addedAt: {
        type: Date,
        default: Date.now
    }
});

// Create the model for wishlist item
const WishlistItem = mongoose.model('WishlistItem', WishlistItemSchema);

// Define the schema for a wishlist
const WishlistSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Assuming 'User' is the model name for users
        required: true
    },
    items: [WishlistItemSchema]
});

// Create the model for wishlist
const Wishlist = mongoose.model('Wishlist', WishlistSchema);

module.exports = { Wishlist, WishlistItem };
