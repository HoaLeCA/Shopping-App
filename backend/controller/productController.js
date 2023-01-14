const Product = require('../models/productModel');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const slugify = require('slugify');
const validMongoDbId = require('../utils/validateMongodbId');
const cloudinary = require('../utils/cloudinary');
const cloudinaryUploadImage = require('../utils/cloudinary');

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
  validMongoDbId(id);
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
  validMongoDbId(id);
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
  validMongoDbId(id);
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

// create wishlist function
// @desc   push product into wishlist
// @router PUT/api/products/:id
// @access public

const toWishList = asyncHandler(async (req, res) => {
  const { _id } = req.user; // get userId from middleware when user login
  const { productId } = req.body; // get product id from user input
  try {
    // find user have _id
    const user = await User.findById(_id);
    const alreadyInWishList = user.wishlist.find(
      (id) => id.toString() === productId
    );
    if (alreadyInWishList) {
      let user = await User.findByIdAndUpdate(
        _id,
        {
          $pull: { wishlist: productId },
        },
        { new: true }
      );
      res.json(user);
    } else {
      let user = await User.findByIdAndUpdate(
        _id,
        {
          $push: { wishlist: productId },
        },
        { new: true }
      );
      res.json(user);
    }
  } catch (error) {
    throw new Error(error);
  }
});

// create rating and comment function
// @desc   user can rate the products
// @router PUT/api/products/:id
// @access public

const rating = asyncHandler(async (req, res) => {
  const { _id } = req.user; // get user id when user login throw middleware
  const { star, productId, comment } = req.body; // get product id from user input
  // find product

  try {
    const product = await Product.findById(productId);
    // find product find by user not
    let alreadyRated = product.rating.find(
      (userId) => userId.postedBy.toString() === _id.toString()
    );
    if (alreadyRated) {
      const updateRating = await Product.updateOne(
        {
          rating: { $elemMatch: alreadyRated },
        },
        {
          $set: { 'rating.$.star': star, 'rating.$.comment': comment },
        },
        { new: true }
      );
      // res.json(updateRating);
    } else {
      const rateProduct = await Product.findByIdAndUpdate(
        productId,
        {
          $push: {
            rating: {
              star: star,
              comment: comment,
              postedBy: _id,
            },
          },
        },

        { new: true }
      );
      // res.json(rateProduct);
    }
    // create total rating
    const getallRating = await Product.findById(productId);
    let totalrating = getallRating.rating.length;

    let ratingSum = getallRating.rating
      .map((item) => item.star)
      .reduce((pre, crr) => pre + crr, 0);
    let actualRating = Math.round(ratingSum / totalrating);
    // update into product
    const updatedRating = await Product.findByIdAndUpdate(
      productId,
      {
        totalrating: actualRating,
      },
      { new: true }
    );
    res.json(updatedRating);
  } catch (error) {
    throw new Error(error);
  }
});

// upload images function
// @desc   admin can load images with related products
// @router PUT/api/upload/:id (id is product id)
// @access Private/admin only

const uploadImages = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validMongoDbId(id);
  const uploader = (path) => cloudinaryUploadImage(path, 'images');
  const files = req.files;
  const urls = [];
  for (const file of files) {
    const { path } = file;
    const newPath = await uploader(path);
    // const result = await cloudinary.uploader.upload(path, 'product');
    // console.log(result);
    urls.push(newPath);
  }

  // find the product with id and update url

  const findProduct = await Product.findByIdAndUpdate(
    id,
    {
      $set: { images: urls },
    },
    {
      new: true,
    }
  );
  if (!findProduct) {
    res.status(404).json({ message: 'Product not found' });
    return;
  }
  res.json(findProduct);
});

module.exports = {
  createProduct,
  getProductById,
  getAllProduct,
  updateProduct,
  deleteProduct,
  toWishList,
  rating,
  uploadImages,
};
