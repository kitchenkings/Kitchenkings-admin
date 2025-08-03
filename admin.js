const express = require('express');
const path = require('path');
const router = express.Router();

const ADMIN_USER = process.env.ADMIN_USER || 'admin';
const ADMIN_PASS = process.env.ADMIN_PASS || 'password123';

router.get('/', (req,res)=>{
  if (req.session.loggedIn) return res.sendFile('dashboard.html',{root: path.join(__dirname,'../public/admin')});
  res.sendFile('login.html',{root: path.join(__dirname,'../public/admin')});
});

router.post('/login',(req,res)=>{
  const { username, password } = req.body;
  if (username === ADMIN_USER && password === ADMIN_PASS){
    req.session.loggedIn = true;
    return res.redirect('/admin/dashboard.html');
  }
  res.send('Invalid credentials. <a href="/admin">Try again</a>');
});

module.exports = router;
