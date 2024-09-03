// const pdetails = require('../Product.json');
const Product = require("../model/product.model")

exports.addNewProduct = async (req, res) => {
    try {
        let product = await Product.findOne({ title: req.body.title, isDelete: false });
        console.log(product);
        if (product) {
            return res.status(400).json({ message: 'product already exist.....' });
        }
        product = await Product.create(req.body);
        res.status(201).json({ product, message: "product Added Success" });
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

