const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'users'
    },
    productId:{
        type: mongoose.Schema.Types.productId,
        ref:'products'
    },
    quantity:{
        type: Number,
        default: 1
    },
    isDelete:{
        type: Boolean,
        default: 1
    },
},
{
    versionKey: false,
    timestamps: true
});

module.exports = mongoose.model('carts', cartSchema);