const express = require('express');
const path = require('path');
const adminRoutes = require('./routes/admin');
const db = require('./config/db');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

// Admin route
app.use('/', adminRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Admin panel is running on port ${PORT}`);
});
