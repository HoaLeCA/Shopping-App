const express = require('express');
const router = express.Router();
const { admin, protect } = require('../middlewares/authMiddleware');
const {
  uploadImages,
  deleteImages,
} = require('../controller/productController');
const {
  uploadPhoto,
  productImgResize,
} = require('../middlewares/uploadImages');

router.post(
  '/upload/',
  protect,
  admin,
  uploadPhoto.array('images', 10),
  productImgResize,
  uploadImages
);

router.delete('/delete-img/:id', protect, admin, deleteImages);

module.exports = router;
