const Product = require('../models/productModel');
const asyncHandler = require('express-async-handler');
const slugify = require('slugify');

// create new product
// @desc    create new product
// @router POST/api/products
// @access Private/admin only

const createProduct = asyncHandler(async (req, res) => {
  try {
    if (req.body.title) {
      req.body.slug = slugify(req.body.title);
    }
    const newProduct = await Product.create(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    throw new Error(error);
  }
});

// update product
// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Private/Admin

const updateProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    if (req.body.title) {
      req.body.slug = slugify(req.body.title);
    }
    const product = await Product.findOneAndUpdate(id, req.body, {
      new: true,
    });
    res.json(product);
  } catch (error) {
    throw new Error(error);
  }
});

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Private/Admin

const deleteProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByIdAndDelete(id);
    if (product) {
      res.json(product);
    }
  } catch (error) {
    res.status(404);
    throw new Error(error);
  }
});

// get product by id
// @desc   get product
// @router GET/api/products/:id
// @access public

const getProductById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

// get all products
// @desc   Get all products
// @router GET/api/products
// @access public

const getAllProduct = asyncHandler(async (req, res) => {
  try {
    // filtering
    const queryObject = { ...req.query };
    // set field we want to excluse in req.query
    const excluseFields = ['page', 'sort', 'limit', 'fields'];
    excluseFields.forEach((el) => delete queryObject[el]);
    // sort or get product greater/lesser than
    let queryString = JSON.stringify(queryObject);
    queryString = queryString.replace(
      /\b(gte|gt|lte|lt)\b/g,
      (match) => `$${match}`
    );
    let query = Product.find(JSON.parse(queryString));

    // sorting
    if (req.query.sort) {
      const sortBy = req.query.sort.split(',').join(' ');
      query = query.sort(sortBy);
    } else {
      query = query.sort('-createdAt');
    }

    // limiting a field
    if (req.query.fields) {
      const fields = req.query.fields.split(',').join(' ');
      query = query.select(fields);
    } else {
      query = query.select('-__v');
    }

    //pagination
    const page = req.query.page;
    const limit = req.query.limit;
    const skip = (page - 1) * limit;
    query = query.skip(skip).limit(limit);
    // validation
    if (req.query.page) {
      const numberProducts = await Product.countDocuments();
      if (skip >= numberProducts) throw new Error('This page does not exist');
    }
    const products = await query;
    res.json(products);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createProduct,
  getProductById,
  getAllProduct,
  updateProduct,
  deleteProduct,
};
