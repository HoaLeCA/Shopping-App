const express = require('express');
const router = express.Router();
const { admin, protect } = require('../middlewares/authMiddleware');
const {
  createProduct,
  getProductById,
  getAllProduct,
  updateProduct,
  deleteProduct,
  toWishList,
  rating,
  uploadImages,
  deleteImages,
} = require('../controller/productController');
const {
  uploadPhoto,
  productImgResize,
} = require('../middlewares/uploadImages');

router.post('/', protect, admin, createProduct);
router.put(
  '/upload/',
  protect,
  admin,
  uploadPhoto.array('images', 10),
  productImgResize,
  uploadImages
);
router.get('/:id', getProductById);
router.get('/', getAllProduct);
router.put('/rating', protect, rating);
router.put('/wishlist/', protect, toWishList);
router.put('/:id', protect, admin, updateProduct);

router.delete('/:id', protect, admin, deleteProduct);
router.delete('/delete-img/:id', protect, admin, deleteImages);

module.exports = router;
