const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true }
});

const SaleSchema = new mongoose.Schema({
    date: { type: Date, required: true },
    store: { type: String, required: true },
    items: [ItemSchema] // Array of items
});

module.exports = mongoose.model('Sale', SaleSchema);
