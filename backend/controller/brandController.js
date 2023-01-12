const Brand = require('../models/brandModel');
const asyncHandler = require('express-async-handler');
const validMongoDbId = require('../utils/validateMongodbId');

// @desc    create new Brand
// @router POST/api/brands
// @access Private/admin only

const createBrand = asyncHandler(async (req, res) => {
  try {
    const newBrand = await Brand.create(req.body);
    res.status(201).json(newBrand);
  } catch (error) {
    throw new Error(error);
  }
});

// @desc   Update Brand
// @router PUT/api/brands/:id
// @access Private/admin only

const updateBrand = asyncHandler(async (req, res) => {
  const { id } = req.params;

  validMongoDbId(id);
  try {
    const updatedBrand = await Brand.findByIdAndUpdate(
      id,
      req.body,

      {
        new: true,
      }
    );
    res.json(updatedBrand);
  } catch (error) {
    throw new Error(error);
  }
});

// @desc    Delete Brand
// @router DELETE/api/brand/:id
// @access Private/admin only

const deleteBrand = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validMongoDbId(id);
  try {
    const deletedBrand = await Brand.findByIdAndDelete(id);
    res.json(deletedBrand);
  } catch (error) {
    throw new Error(error);
  }
});

// @desc   Get Category
// @router GET/api/brand/:id
// @access Public

const getBrand = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validMongoDbId(id);
  try {
    const brand = await Brand.findById(id);
    res.json(brand);
  } catch (error) {
    throw new Error(error);
  }
});

// @desc   Get all Brands
// @router GET/api/brand/
// @access Public

const getAllBrands = asyncHandler(async (req, res) => {
  try {
    const brands = await Brand.find({});
    res.json(brands);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createBrand,
  updateBrand,
  deleteBrand,
  getBrand,
  getAllBrands,
};
