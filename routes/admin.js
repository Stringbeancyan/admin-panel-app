const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../middleware/auth');

// Admin panel route
router.get('/admin', ensureAuthenticated, (req, res) => {
    if (req.user.username === 'Stryngbean_cyan') {
        res.render('admin', { user: req.user });
    } else {
        res.status(403).send('Access denied. Admins only.');
    }
});

module.exports = router;
