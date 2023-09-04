import express from 'express';

//controller/products
import getProducts from '../controllers/products/getProducts.js';
import getProductsAll from'../controllers/products/getProductsAll.js';
import insertProducts from '../controllers/products/insertProducts.js';
import upDateProducts from '../controllers/products/upDateProducts.js';
import deleteProducts from '../controllers/products/deleteProducts.js';



const router = express.Router();

router.get('/', getProducts);
router.get('/list', getProductsAll);

router.post('/', insertProducts);

router.put('/', upDateProducts);

router.delete('/', deleteProducts);

export default router;