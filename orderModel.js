const mongoose = require('mongoose');
const OrderSchema = new mongoose.Schema({
  name: String,
  items: Array,
  total: Number,
  paymentMethod: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});
module.exports = mongoose.model('Order', OrderSchema);