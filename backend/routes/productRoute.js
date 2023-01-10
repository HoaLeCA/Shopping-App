const express = require('express');
const router = express.Router();
const { admin, protect } = require('../middlewares/authMiddleware');
const {
  createProduct,
  getProductById,
  getAllProduct,
  updateProduct,
  deleteProduct,
} = require('../controller/productController');

router.post('/', protect, admin, createProduct);
router.get('/:id', getProductById);
router.get('/', getAllProduct);
router.put('/:id', protect, admin, updateProduct);
router.delete('/:id', protect, admin, deleteProduct);

module.exports = router;
