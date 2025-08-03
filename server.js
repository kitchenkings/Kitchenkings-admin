const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || process.env.MONGO_URI || '';

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=>console.log('MongoDB connected'))
  .catch(e=>console.error('MongoDB connection error', e));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
  secret: 'kitchenkings_secret',
  resave: false,
  saveUninitialized: true
}));

app.use(express.static(path.join(__dirname, 'public')));

// routes
const adminRoutes = require('./routes/admin');
const orderRoutes = require('./routes/orders');
const menuRoutes = require('./routes/menu');

app.use('/admin', adminRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/menu', menuRoutes);

app.get('/', (req,res)=> res.send('Kitchen Kings backend running'));

app.listen(PORT, ()=> console.log('Server listening on', PORT));
