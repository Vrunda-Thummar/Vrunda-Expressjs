const express = require('express');
const cartRoutes = express.Router();

const{
    addtoCart,
} = require("../controller/carts.controller");
const { verifyToken } = require("../helpers/verifyToken");

cartRoutes.post("/", verifyToken, addtoCart);
// cartRoutes.post("/", verifyToken, addtoCart);

module.exports = cartRoutes;