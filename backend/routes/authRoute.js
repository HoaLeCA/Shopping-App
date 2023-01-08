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
} = require('../controller/userController');

router.post('/', registerUser);
router.post('/login', loginUser);
router.get('/', protect, admin, getUsers);
router.get('/:id', protect, admin, getUser);
router.delete('/:id', deleteUser);
router.put('/:id', protect, updateUser);
module.exports = router;
