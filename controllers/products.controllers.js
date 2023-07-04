const Products = require("../models/product.model")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();


// Obtener todos los productos
const getProducts = async (req, res) => {
    try {
        const products = await Products.find()
        res.send(products)
    } catch (error) {
        res.status(404).send(error)
    }
}

// Obtener un producto por ID
const getProductById = async (req, res) => {
    try {
        const id = req.params.id
        const products = await Products.findById(id)
        res.send(products)
    } catch (error) {
        res.status(404).send(error)
    }
}

// Agregar un nuevo producto
const createProduct = async (req, res) => {
    try {
        const newProduct = {
            name: req.body.name,
            brand: req.body.brand,
            classification:req.body.classification,
            price: req.body.price,
            stock: req.body.stock
        }
        const product = Products.create(newProduct)
        res.status(201).send({ mensaje: "Producto agregado con éxito", producto: newProduct })
    } catch (error) {
        res.status(404).send(error)
    }
}

// Modificar un producto
const editProduct = async(req, res)=>{
    const id = req.params.id
    const productEdited = {
        name: req.body.name,
            brand: req.body.brand,
            classification:req.body.classification,
            price: req.body.price,
            stock: req.body.stock
    }
    try {
        const product = await Products.findByIdAndUpdate(id, productEdited)
        res.status(200).send({ mensaje: "Producto modificado con éxito", producto: productEdited })
    } catch (error) {
        res.status(404).send(error)
    }
}

// Eliminar un producto
const deleteProduct = async(req, res)=>{
    const id = req.params.id
        try {
        const product = await Products.findByIdAndDelete(id)
        res.send({ mensaje: "Producto eliminado con éxito", producto: product })
    } catch (error) {
        res.status(404).send(error)
    }
}

module.exports = {
    getProducts,
    getProductById,
    createProduct,
    editProduct,
    deleteProduct
}