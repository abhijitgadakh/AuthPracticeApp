const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cors = require("cors");
const AuthRouter = require('./Routes/AuthRouter')
const ProductRouter = require('./Routes/ProductRouter')

require('dotenv').config();
require("./config/db");
const PORT = process.env.PORT || 8080;

const corsOptions = {
  origin: 'https://auth-practice-client.vercel.app', // replace with your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true, // if you want to allow cookies or authentication headers
};

app.get('/ping', (req, res)=>{
    res.send("pong");
});

app.use(bodyParser.json());
// app.use(cors());
app.use(cors(corsOptions));
app.use('/auth', AuthRouter);
app.use('/products', ProductRouter);

app.listen(PORT, ()=>{
  console.log("Server is running on port: " + PORT);
});