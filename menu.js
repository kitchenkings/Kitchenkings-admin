const express = require('express');
const router = express.Router();
const MenuItem = require('../models/MenuItem');

// GET all
router.get('/', async (req, res) => {
  const items = await MenuItem.find();
  res.json(items);
});

// POST new
router.post('/', async (req, res) => {
  const item = new MenuItem(req.body);
  await item.save();
  res.json({ added: true });
});

// PUT update
router.put('/:id', async (req, res) => {
  await MenuItem.findByIdAndUpdate(req.params.id, req.body);
  res.json({ updated: true });
});

// DELETE item
router.delete('/:id', async (req, res) => {
  await MenuItem.findByIdAndDelete(req.params.id);
  res.json({ deleted: true });
});

module.exports = router;
