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
} = require('../controller/userController');

router.post('/', registerUser);
router.post('/forgot-password-token', forgotPasswordToken);
router.put('/reset-password/:token', resetPassword);

router.put('/password', protect, updatePassword);
router.post('/login', loginUser);
router.get('/refresh', handleRefreshToken);
router.get('/logout', logout);
router.get('/', protect, admin, getUsers);
router.get('/:id', protect, admin, getUser);

router.delete('/:id', protect, admin, deleteUser);
router.put('/:id', protect, updateUser);
router.put('/block/:id', protect, admin, blockUser);
router.put('/unblock/:id', protect, admin, unBlockUser);

module.exports = router;
