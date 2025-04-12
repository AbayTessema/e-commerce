import express from 'express';
const router= express.Router();
import {
    createproduct,
    getAllProducts,
    getSingleProduct,
    updateProduct,
    deleteProduct
} from '../controllers/productController.js'



// getting all products from db
router.get('/',getAllProducts)
//gettting a single product from db
router.get('/:id',getSingleProduct)
// creating products
router.post('/',createproduct 
)
//updating products
router.put('/:id',updateProduct)
 // deletging a product from DB
router.delete('/:id',deleteProduct )

export default router;