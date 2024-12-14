// ProductRouter.js

const router = require("express").Router();
const { getProducts } = require("../Controllers/ProductController");
const ensureAunthenticated = require("../Middlewares/Auth");


router.get('/', ensureAunthenticated, getProducts);

module.exports = router;