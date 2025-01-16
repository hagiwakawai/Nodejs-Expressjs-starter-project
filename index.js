require('dotenv').config();
const express = require('express');
const logger = require('./middleware/logger');
const testRoute = require('./routes/test');
const greetRoute = require('./routes/greet');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(logger);

// Routes
app.use(testRoute);
app.use(greetRoute);

// Start Server
app.listen(PORT, () => console.log(`Server is now listening on port ${PORT}`));
