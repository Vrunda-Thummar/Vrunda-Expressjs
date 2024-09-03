const Product = require("../model/product.model");
const ProductServices = require("../services/product.service");
const productServices = new ProductServices();
const Message = require('../helpers/messages');


exports.addNewProduct = async (req, res) => {
    try {
        let product = await productServices.getProduct({
            title: req.body.title,
            isDelete: false,
        });
        if (product) {
            return res.status(400).json({ message: Message.ALREADY_EXIST_PRODUCT });
        }
        product = await Product.create(req.body);
        res.status(201).json({ product, message: Message.ADD_NEW_PRODUCT });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

exports.getAllProducts = async (req, res) => {
    try {
        let product = await Product.find();
        res.status(200).json(product);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

