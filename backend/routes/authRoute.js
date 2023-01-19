const express = require('express');
const router = express.Router();
const { protect, admin } = require('../middlewares/authMiddleware');
const {
  registerUser,
  loginUser,
  getUsers,
  getUser,
  deleteUser,
  updateUser,
  blockUser,
  unBlockUser,
  handleRefreshToken,
  logout,
  updatePassword,
  forgotPasswordToken,
  resetPassword,
  loginAdmin,
  getWishList,
  saveAddress,
  userCard,
  getUserCard,
  emptyUserCard,
  applyCoupon,
} = require('../controller/userController');

router.post('/', registerUser);
router.post('/forgot-password-token', forgotPasswordToken);
router.put('/reset-password/:token', resetPassword);

router.put('/password', protect, updatePassword);
router.put('/address/:id', protect, saveAddress);
router.post('/login', loginUser);
router.post('/admin', loginAdmin);
router.post('/card', protect, userCard);
router.post('/apply-coupon', protect, applyCoupon);
router.get('/card', protect, getUserCard);
router.delete('/card', protect, emptyUserCard);
router.get('/refresh', handleRefreshToken);
router.get('/logout', logout);
router.get('/wishlist', protect, getWishList);
router.get('/', protect, admin, getUsers);
router.get('/:id', protect, admin, getUser);

router.delete('/:id', protect, admin, deleteUser);
router.put('/:id', protect, updateUser);
router.put('/block/:id', protect, admin, blockUser);
router.put('/unblock/:id', protect, admin, unBlockUser);

module.exports = router;
