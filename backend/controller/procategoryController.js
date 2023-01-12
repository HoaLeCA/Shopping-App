const PCategory = require('../models/procategoryModel');
const asyncHandler = require('express-async-handler');
const validMongoDbId = require('../utils/validateMongodbId');

// create new Category
// @desc    create new Category
// @router POST/api/Category
// @access Private/admin only

const createPCategory = asyncHandler(async (req, res) => {
  try {
    const newCategory = await PCategory.create(req.body);
    res.status(201).json(newCategory);
  } catch (error) {
    throw new Error(error);
  }
});

// Update Category
// @desc   Update Category
// @router PUT/api/Category/:id
// @access Private/admin only

const updatePCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;

  validMongoDbId(id);
  try {
    const updateCategory = await PCategory.findByIdAndUpdate(
      id,
      req.body,

      {
        new: true,
      }
    );
    res.json(updateCategory);
  } catch (error) {
    throw new Error(error);
  }
});

// @desc    Delete Category
// @router DELETE/api/category/:id
// @access Private/admin only

const deletePCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validMongoDbId(id);
  try {
    const deleteCategory = await PCategory.findByIdAndDelete(id);
    res.json(deleteCategory);
  } catch (error) {
    throw new Error(error);
  }
});

// @desc   Get Category
// @router GET/api/category/:id
// @access Private/admin only

const getPCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validMongoDbId(id);
  try {
    const category = await PCategory.findById(id);
    res.json(category);
  } catch (error) {
    throw new Error(error);
  }
});

// @desc   Get all Categories
// @router GET/api/category/
// @access Private/admin only

const getAllPCategory = asyncHandler(async (req, res) => {
  try {
    const category = await PCategory.find({});
    res.json(category);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createPCategory,
  updatePCategory,
  deletePCategory,
  getPCategory,
  getAllPCategory,
};
