const Router = require("express");
const { jwtValidation } = require('../middlewares/jwtValidation');


const {getProducts, getProductById, createProduct, editProduct, deleteProduct} = require("../controllers/products.controllers");
const { body } = require('express-validator');
const router = Router();
const { validateErrors } = require ("../middlewares/validateErrors")

router.get("/", getProducts); //jwtValidation, 

router.get("/:id", getProductById); //jwtValidation, 

router.post("/", [
    body ('name').notEmpty().withMessage('El nombre del producto es obligatorio'),
    body ('name').isLength({min: 3}).withMessage('El nombre del producto debe tener al menos 3 caracteres'),
    body ('name').isLength({max: 30}).withMessage('El nombre del producto debe tener como máximo 30 caracteres'),
    body ('brand').notEmpty().withMessage('La marca del producto es obligatoria'),
    body ('brand').isLength({min: 3}).withMessage('La marca del producto debe tener al menos 3 caracteres'),
    body ('brand').isLength({max: 30}).withMessage('La marca del producto debe tener como máximo 30 caracteres'), 
    body ('price').notEmpty().withMessage('El precio es obligatorio'),
    body ('stock').notEmpty().withMessage('El stock es obligatorio'),
    body ('classification').notEmpty().withMessage('La clasificación del producto es obligatoria'),
    validateErrors,
], createProduct); //jwtValidation, 

router.put(
  "/:id", [
    body ('name').notEmpty().withMessage('El nombre del producto es obligatorio'),
    body ('name').isLength({min: 3}).withMessage('El nombre del producto debe tener al menos 3 caracteres'),
    body ('name').isLength({max: 30}).withMessage('El nombre del producto debe tener como máximo 30 caracteres'),
    body ('brand').notEmpty().withMessage('La marca del producto es obligatoria'),
    body ('brand').isLength({min: 3}).withMessage('La marca del producto debe tener al menos 3 caracteres'),
    body ('brand').isLength({max: 30}).withMessage('La marca del producto debe tener como máximo 30 caracteres'), 
    body ('price').notEmpty().withMessage('El precio es obligatorio'),
    body ('stock').notEmpty().withMessage('El stock es obligatorio'),
    body ('classification').notEmpty().withMessage('La clasificación del producto es obligatoria'),
    validateErrors,
], editProduct); //jwtValidation, 

router.delete("/:id", deleteProduct); //jwtValidation, 

module.exports = router;
