const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

router.get('/', async (req,res)=>{
  const orders= await Order.find().sort({ timestamp:-1 });
  res.json(orders);
});

router.post('/', async (req,res)=>{
  const { items, total }= req.body;
  const order = new Order({ items, total });
  await order.save();
  res.json({ success:true, order });
});

router.put('/status/:id', async (req,res)=>{
  const { status }= req.body;
  await Order.findByIdAndUpdate(req.params.id,{ status });
  res.json({ updated:true });
});

router.delete('/:id', async (req,res)=>{
  await Order.findByIdAndDelete(req.params.id);
  res.json({ deleted:true });
});

module.exports=router;
