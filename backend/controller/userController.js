const asyncHandler = require('express-async-handler');
const bycryt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const Product = require('../models/productModel');
const Card = require('../models/cardModel');
const Coupon = require('../models/couponModel');
const generateToken = require('../utils/generateToken.js');
const validMongoDbId = require('../utils/validateMongodbId');
const generateRefreshToken = require('../utils/refreshToken');
const sendEmail = require('./emailController');
const crypto = require('crypto');

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

  // create user

  const user = await User.create({
    firstname,
    lastname,
    email,
    mobile,
    password,
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

// @desc    Authenticate user -> use refresh token when user login
// @router POST/api/users/login
// @access Public

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // file user from database by search for email(email is unique in the database)

  const user = await User.findOne({ email });

  // check user is valiad and compare password user input with user registered

  if (user && (await bycryt.compare(password, user.password))) {
    const refreshToken = await generateRefreshToken(user?.id);
    const updateUser = await User.findByIdAndUpdate(
      user.id,
      {
        refreshToken: refreshToken,
      },
      {
        new: true,
      }
    );
    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      maxAge: 72 * 60 * 60 * 1000,
    });
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

// @desc    Authenticate Admin
// @router POST/api/users/admin-login
// @access Private/admin only

const loginAdmin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // file user from database by search for email(email is unique in the database)

  const user = await User.findOne({ email });
  console.log(user.role);

  //verify this user is admin or not
  if (user.role !== 'admin')
    throw new Error('Not Authorized, You are not Admin');

  // check user is valiad and compare password user input with user registered

  if (user && (await bycryt.compare(password, user.password))) {
    const refreshToken = await generateRefreshToken(user?.id);
    const updateUser = await User.findByIdAndUpdate(
      user.id,
      {
        refreshToken: refreshToken,
      },
      {
        new: true,
      }
    );
    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      maxAge: 72 * 60 * 60 * 1000,
    });
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

// handle refresh token

// @desc   Refresh token
// @router GET/api/users
// @access
const handleRefreshToken = asyncHandler(async (req, res) => {
  const cookie = req.cookies;
  if (!cookie?.refreshToken) throw new Error('No refreshToken');
  const refreshToken = cookie.refreshToken;

  //find user with refresh token in database
  const user = await User.findOne({ refreshToken });
  if (!user) throw new Error('No refreshToken store in database on this user');

  // verify token in cookie and database
  jwt.verify(refreshToken, process.env.JWT_SECRET, (err, decoded) => {
    if (err || user.id !== decoded.id)
      throw new Error('There is something wrong with refresh token');
  });
  // provide new access token
  const accessToken = generateToken(user._id);
  res.json(accessToken);
});

// Logout functionality

const logout = asyncHandler(async (req, res) => {
  const cookie = req.cookies;
  if (!cookie?.refreshToken) throw new Error('No refreshToken');
  const refreshToken = cookie.refreshToken;
  //find user with refresh token in database
  const user = await User.findOne({ refreshToken });
  if (!user) {
    res.clearCookie('refreshToken', {
      httpOnly: true,
      secure: true,
    });
    return res.sendStatus(204); // forbidden
  }
  // clear refreshToken from user in databsae
  await User.findOneAndUpdate(refreshToken, {
    refreshToken: '',
  });
  return res.sendStatus(204); // forbidden
});

// @desc   GET all user
// @router GET/api/users
// @access Private/Admin

const getUsers = asyncHandler(async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
    //res.status(200).json(req.user);
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
    //res.status(200).json(req.user);
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
  const { id } = req.params;
  validMongoDbId(id);
  try {
    const user = await User.findById(id);
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
  const { _id } = req.user;
  validMongoDbId(_id);
  try {
    const user = await User.findByIdAndUpdate(
      _id,
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

// @desc   Save user address using ID
// @router PUT/api/users/:id
// @access Public
const saveAddress = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  validMongoDbId(_id);
  try {
    const user = await User.findByIdAndUpdate(
      _id,
      {
        address: req?.body?.address,
      },
      { new: true }
    );

    res.json(user);
  } catch (error) {
    res.status(400);
    throw new Error('User not found');
  }
});

// Block user by ID
// @desc   BLOCK single user by ID
// @router PUT/api/users/:id
// @access Private/Admin

const blockUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validMongoDbId(id);
  try {
    const user = await User.findByIdAndUpdate(
      id,
      {
        isBlock: true,
      },
      {
        new: true,
      }
    );
    res.json({
      message: 'User Block',
    });
  } catch (error) {
    res.status(401);
    throw new Error('User not found');
  }
});
// UnBlock user by ID
// @desc   UNBLOCK single user by ID
// @router PUT/api/users/:id
// @access Private/Admin

const unBlockUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validMongoDbId(id);
  try {
    const user = await User.findByIdAndUpdate(
      id,
      {
        isBlock: false,
      },
      {
        new: true,
      }
    );
    res.json({
      message: 'User Unblock',
    });
  } catch (error) {
    res.status(401);
    throw new Error('User not found');
  }
});

const updatePassword = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const { password } = req.body;
  validMongoDbId(_id);
  const user = await User.findById(_id);

  if (password) {
    user.password = password;
    const updatedPassword = await user.save();
    res.json(updatedPassword);
  } else {
    res.json(user);
  }
});

const forgotPasswordToken = asyncHandler(async (req, res) => {
  const { email } = req.body;
  // find user with that email
  const user = await User.findOne({ email });
  if (!user) throw new Error('User not found with this email');

  try {
    const token = await user.createPasswordResetToken();
    await user.save();
    const resetURL = `Please follow this link to reset your password. This link is valid in ten minutes.<a href='http://localhost:3000/api/users/reset-password/${token}'>Click Here </>`;
    const data = {
      to: email,
      text: 'Hey User',
      subject: 'Forgot password link',
      htm: resetURL,
    };
    sendEmail(data);
    res.json(token);
  } catch (error) {
    throw new Error(error);
  }
});

// @desc   User can reset password
// @router PUT/api/users/:id
// @access Public

const resetPassword = asyncHandler(async (req, res) => {
  const { password } = req.body;
  const { token } = req.params;

  const hashedToken = crypto.createHash('sha256').update(token).digest('hex');
  // find user with hashedToken to reset
  const user = await User.findOne({
    passwordRestToken: hashedToken,
    passwordResetExpired: { $gt: Date.now() },
  });
  // validate user
  if (!user) throw new Error('Token is expired, please try again');
  user.password = password;
  // clear resettoken and password reset expire in database
  user.passwordRestToken = undefined;
  user.passwordResetExpired = undefined;
  await user.save();
  res.json(user);
});

// @desc   User get wishlist
// @router get/api/users/:id
// @access Public

const getWishList = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  validMongoDbId(_id);
  try {
    // find user

    const user = await User.findById(_id).populate('wishlist');
    res.json(user);
  } catch (error) {
    throw new Error(error);
  }
});

// @desc   create user card
// @router get/api/card/:id
// @access Public

const userCard = asyncHandler(async (req, res) => {
  const { card } = req.body;
  const { _id } = req.user;
  validMongoDbId(_id);

  try {
    let products = [];
    const user = await User.findById(_id);
    // check if user already has products in card
    const alreadyExistCard = await Card.findOne({ orderBy: user._id });
    if (alreadyExistCard) {
      alreadyExistCard.remove();
    }

    for (let i = 0; i < card.length; i++) {
      let object = {};
      object.product = card[i]._id;
      object.count = card[i].count;
      object.color = card[i].color;
      let getPrice = await Product.findById(card[i]._id).select('price').exec();

      object.price = getPrice.price;
      products.push(object);
    }
    let cardTotal = 0;
    for (let i = 0; i < products.length; i++) {
      cardTotal = cardTotal + products[i].price * products[i].count;
    }
    // update a card
    let newCard = await new Card({
      products,
      cardTotal,
      orderBy: user?._id,
    }).save();
    res.json(newCard);
  } catch (error) {
    throw new Error(error);
  }
});
// @desc   get card
// @router get/api/card/:id
// @access Public

const getUserCard = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  validMongoDbId(_id);

  try {
    const card = await Card.findOne({ orderBy: _id }).populate(
      'products.product'
    );
    res.json(card);
  } catch (error) {
    throw new Error(error);
  }
});

// @desc   empty user card
// @router Delete/api/card/:id
// @access Public
const emptyUserCard = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  validMongoDbId(_id);
  try {
    const user = await User.findById(_id);
    const card = await Card.findOneAndRemove({ orderBy: user._id });
    res.json(card);
  } catch (error) {
    throw new Error(error);
  }
});

// @desc   Apply coupon on the order
// @router put/api/apply-coupon
// @access Public

const applyCoupon = asyncHandler(async (req, res) => {
  // get copoun from user input
  const { coupon } = req.body;
  const { _id } = req.user;
  validMongoDbId(_id);
  // find the coupon in the database
  const validCoupon = await Coupon.findOne({ name: coupon });
  if (validCoupon === null) throw new Error('Invalid Coupon');
  // find user with a coupon
  const user = await User.findById(_id);
  //find card total from database
  let { cardTotal } = await Card.findOne({ orderBy: user._id }).populate(
    'products.product'
  );
  let totalAfterDiscount = (
    cardTotal -
    (cardTotal * validCoupon.discount) / 100
  ).toFixed(2);
  await Card.findOneAndUpdate(
    {
      orderBy: user._id,
    },
    { totalAfterDiscount }
  );
  res.json(totalAfterDiscount);
});

// export model
module.exports = {
  registerUser,
  loginUser,
  loginAdmin,
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
  getWishList,
  saveAddress,
  userCard,
  getUserCard,
  emptyUserCard,
  applyCoupon,
};
