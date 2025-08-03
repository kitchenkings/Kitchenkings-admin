const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

router.get('/', async (req, res) => {
  const orders = await Order.find().sort({ timestamp: -1 });
  res.json(orders);
});

router.post('/', async (req, res) => {
  const order = new Order(req.body);
  await order.save();
  res.json({ success: true });
});

router.put('/status/:id', async (req, res) => {
  await Order.findByIdAndUpdate(req.params.id, { status: req.body.status });
  res.json({ updated: true });
});

router.delete('/:id', async (req, res) => {
  await Order.findByIdAndDelete(req.params.id);
  res.json({ deleted: true });
});

module.exports = router;
