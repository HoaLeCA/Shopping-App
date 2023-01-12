const BCategory = require('../models/blogcategoryModel');
const asyncHandler = require('express-async-handler');
const validMongoDbId = require('../utils/validateMongodbId');

// create new Category
// @desc    create new Category
// @router POST/api/Category
// @access Private/admin only

const createBCategory = asyncHandler(async (req, res) => {
  try {
    const newCategory = await BCategory.create(req.body);
    res.status(201).json(newCategory);
  } catch (error) {
    throw new Error(error);
  }
});

// Update Category
// @desc   Update Category
// @router PUT/api/Category/:id
// @access Private/admin only

const updateBCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;

  validMongoDbId(id);
  try {
    const updateCategory = await BCategory.findByIdAndUpdate(
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

const deleteBCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validMongoDbId(id);
  try {
    const deleteCategory = await BCategory.findByIdAndDelete(id);
    res.json(deleteCategory);
  } catch (error) {
    throw new Error(error);
  }
});

// @desc   Get Category
// @router GET/api/category/:id
// @access Private/admin only

const getBCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validMongoDbId(id);
  try {
    const category = await BCategory.findById(id);
    res.json(category);
  } catch (error) {
    throw new Error(error);
  }
});

// @desc   Get all Categories
// @router GET/api/category/
// @access Private/admin only

const getAllBCategory = asyncHandler(async (req, res) => {
  try {
    const category = await BCategory.find({});
    res.json(category);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createBCategory,
  updateBCategory,
  deleteBCategory,
  getBCategory,
  getAllBCategory,
};
