const express = require('express');
const app = express();

// Import the order routes
const orderRoutes = require('./routes/orderroutes');

// Use the order routes
app.use('/api/orders', orderRoutes);

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});