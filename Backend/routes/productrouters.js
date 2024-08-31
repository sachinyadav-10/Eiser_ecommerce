const express = require('express');
const router = express.Router();
const productController = require('../controllers/productcontroller');

router.get('/highest-rated', productController.getHighestRatedByCategory);
router.get('/highest-rated', productController.getHighestRatedByCategory);
router.get('/highest-ordered', productController.getHighestOrderedByCategory);
router.get('/all-products', productController.getAllProducts);
router.get('/top-rated', productController.getTopRatedProducts);

module.exports = router;