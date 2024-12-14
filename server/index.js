const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cors = require("cors");
const AuthRouter = require('./Routes/AuthRouter');
const ProductRouter = require('./Routes/ProductRouter');

require('dotenv').config();
require("./config/db");
const PORT = process.env.PORT || 8080;

// CORS configuration: Allow only your frontend domain
const corsOptions = {
  origin: 'https://auth-practice-client.vercel.app', // no trailing slash
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // include OPTIONS for preflight requests
  credentials: true, // allow credentials (cookies, headers, etc.)
};

app.use(cors(corsOptions)); // Ensure cors middleware is applied before routes

app.get('/ping', (req, res) => {
  res.send("pong");
});

app.use(bodyParser.json());
app.use('/auth', AuthRouter);
app.use('/products', ProductRouter);

app.listen(PORT, () => {
  console.log("Server is running on port: " + PORT);
});
