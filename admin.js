const express = require('express');
const router = express.Router();

const ADMIN_USER = 'admin';
const ADMIN_PASS = 'password123';

router.get('/', (req, res) => {
  if (req.session.loggedIn) return res.redirect('/admin/dashboard.html');
  res.sendFile('login.html', { root: './public/admin' });
});

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === ADMIN_USER && password === ADMIN_PASS) {
    req.session.loggedIn = true;
    return res.redirect('/admin/dashboard.html');
  }
  res.send('Invalid login. <a href="/admin">Try again</a>.');
});

module.exports = router;
