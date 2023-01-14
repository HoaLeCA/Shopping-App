const Coupon = require('../models/couponModel');
const asyncHandler = require('express-async-handler');
const validMongoDbId = require('../utils/validateMongodbId');

// @desc    create new coupon
// @router POST/api/coupon
// @access Private/admin only
const createCoupon = asyncHandler(async (req, res) => {
  try {
    const newCoupon = await Coupon.create(req.body);
    res.json(newCoupon);
  } catch (error) {
    throw new Error(error);
  }
});
// @desc   Get all coupon
// @router GET/api/coupon
// @access Private/admin only
const getAllCoupon = asyncHandler(async (req, res) => {
  try {
    const coupons = await Coupon.find({});
    res.json(coupons);
  } catch (error) {
    throw new Error(error);
  }
});
// @desc   Get a coupon
// @router GET/api/coupon
// @access Private/admin only

const getaCoupon = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const coupon = await Coupon.findById(id);
    res.json(coupon);
  } catch (error) {
    throw new Error(error);
  }
});
// @desc   delete coupon
// @router DELETE/api/coupon/:id
// @access Private/admin only
const deleteCoupon = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const coupon = await Coupon.findByIdAndDelete(id);
    res.json(coupon);
  } catch (error) {
    throw new Error(error);
  }
});
// @desc   Update coupon
// @router PUT/api/coupon/:id
// @access Private/admin only
const updateCoupon = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const coupon = await Coupon.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(coupon);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createCoupon,
  getAllCoupon,
  deleteCoupon,
  updateCoupon,
  getaCoupon,
};
