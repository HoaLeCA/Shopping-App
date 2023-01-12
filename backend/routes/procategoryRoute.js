const express = require('express');
const {
  createPCategory,
  updatePCategory,
  deletePCategory,
  getPCategory,
  getAllPCategory,
} = require('../controller/procategoryController');
const { protect, admin } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', protect, admin, createPCategory);

router.put('/:id', protect, admin, updatePCategory);
router.delete('/:id', protect, admin, deletePCategory);
router.get('/', getAllPCategory);
router.get('/:id', getPCategory);

module.exports = router;
