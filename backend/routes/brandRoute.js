const express = require('express');
const {
  createBrand,
  updateBrand,
  deleteBrand,
  getAllBrands,
  getBrand,
} = require('../controller/brandController');
const { protect, admin } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', protect, admin, createBrand);
router.put('/:id', protect, admin, updateBrand);
router.get('/', getAllBrands);
router.get('/:id', getBrand);

router.delete('/:id', protect, admin, deleteBrand);

module.exports = router;
