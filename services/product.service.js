const Product = require("../model/product.model");

class ProductServices{
    async addNewProduct(body){
        return await Product.create(body);
    }

    async getProduct(body){
        try {
            return await Product.findOne(body);
        } catch (err) {
            console.log(err);
            return err;
        }
    }
};

module.exports = ProductServices;