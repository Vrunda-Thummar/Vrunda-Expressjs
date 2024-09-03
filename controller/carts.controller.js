const Cart = require("../model/cart.model");

exports.addtoCart = async (req, res) => {
    try {
        let cart = await Cart.findOne({
            user: req.user._id,
            productId: req.body.productId,
            isDelete: false
        });
        if(cart) {
          return res.json({message : "Already exist...."});
        }
        cart = await Cart.create({
            user : req.user.id,
            ...req.body,
        });
        res.status(201).json({message : "Cart Added", cart})
    } catch (error) {
        console.log(err);
        res.status(500).json({message : "Server Error"});
    }
} 