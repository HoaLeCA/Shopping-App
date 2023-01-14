const express = require('express');
const {
  createCoupon,
  getAllCoupon,
  deleteCoupon,
  updateCoupon,
  getaCoupon,
} = require('../controller/couponController');
const { protect, admin } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', protect, admin, createCoupon);
router.get('/', protect, admin, getAllCoupon);
router.delete('/:id', protect, admin, deleteCoupon);
router.put('/:id', protect, admin, updateCoupon);
router.get('/:id', protect, admin, getaCoupon);

module.exports = router;
