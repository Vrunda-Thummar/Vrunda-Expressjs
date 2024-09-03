const express = require("express");
const orderRoutes = express.Router();
const {
    addNewOrder
} = require("../controller/order.controller");
const { verifyToken} = require('../helpers/verifyToken');

orderRoutes.post("/", verifyToken, addNewOrder);
// orderRoutes.get("/", verifyToken, getAllCarts);

module.exports = orderRoutes;