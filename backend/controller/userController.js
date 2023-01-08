const asyncHandler = require('express-async-handler');
const bycryt = require('bcrypt');
const User = require('../models/userModel');
const generateToken = require('../utils/generateToken.js');

// @desc    create user
// @router POST/api/users
// @access Private

const registerUser = asyncHandler(async (req, res) => {
  const { firstname, lastname, email, mobile, password } = req.body;
  // check if user does not input information
  if (!firstname || !lastname || !email || !mobile || !password) {
    res.status(400);
    throw new Error('Please fill all information to register');
  }

  // check if user exist
  const userExist = await User.findOne({ email });
  if (userExist) {
    res.status(400);
    throw new Error('User already exist');
  }

  // hash password
  const salt = await bycryt.genSalt(10);
  const hashPassword = await bycryt.hash(password, salt);

  // create user

  const user = await User.create({
    firstname,
    lastname,
    email,
    mobile,
    password: hashPassword,
  });

  // check user

  if (user) {
    res.status(200).json({
      _id: user.id,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      mobile: user.mobile,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

// @desc    Authenticate user
// @router POST/api/users/login
// @access Public

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // file user from database by search for email(email is unique in the database)

  const user = await User.findOne({ email });

  // check user is valiad and compare password user input with user registered

  if (user && (await bycryt.compare(password, user.password))) {
    res.status(200).json({
      _id: user.id,
      name: user.firstname + ' ' + user.lastname,
      email: user.email,
      phone: user.mobile,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error('Invalid verify email and password');
  }
});

// @desc   GET all user
// @router GET/api/users
// @access Private/Admin

const getUsers = asyncHandler(async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    throw new Error(error);
  }
});

// Get single user by ID
// @desc   GET single user by ID
// @router GET/api/users/:id
// @access Private/Admin
const getUser = asyncHandler(async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(400);
    throw new Error('User not found');
  }
});

// Delete user by ID
// @desc   DELETE single user by ID
// @router DELETE/api/users/:id
// @access Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    await user.remove();
    res.json({ message: 'User removed' });
  } catch (error) {
    res.status(400);
    throw new Error('User not found');
  }
});

// Update user by ID
// @desc   UPDATE single user by ID
// @router PUT/api/users/:id
// @access Private/Admin
const updateUser = asyncHandler(async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      {
        firstname: req?.body?.firstname,
        lasttname: req?.body?.lastname,
        email: req?.body?.email,
        mobile: req?.body?.mobile,
      },
      { new: true }
    );

    res.json(user);
  } catch (error) {
    res.status(400);
    throw new Error('User not found');
  }
});

// export model
module.exports = {
  registerUser,
  loginUser,
  getUsers,
  getUser,
  deleteUser,
  updateUser,
};
