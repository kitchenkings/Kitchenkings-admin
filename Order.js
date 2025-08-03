const mongoose = require('mongoose');
const OrderSchema = new mongoose.Schema({
  items: [{ name:String, qty:Number, total:Number }],
  total: Number,
  status: { type:String, default:'Pending' },
  timestamp: { type:Date, default: Date.now }
});
module.exports = mongoose.model('Order', OrderSchema);
