const express = require('express');
const {
  createBCategory,
  updateBCategory,
  deleteBCategory,
  getBCategory,
  getAllBCategory,
} = require('../controller/blogcategoryController');
const { protect, admin } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', protect, admin, createBCategory);

router.put('/:id', protect, admin, updateBCategory);
router.delete('/:id', protect, admin, deleteBCategory);
router.get('/', getAllBCategory);
router.get('/:id', getBCategory);

module.exports = router;
