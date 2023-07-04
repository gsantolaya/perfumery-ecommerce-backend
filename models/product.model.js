const { Schema, model } = require("mongoose")

const productSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    brand:{
        type: String,
        required: true
    },
    classification:{
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
    }
})

module.exports = model('Producto', productSchema)