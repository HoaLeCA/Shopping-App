const jwt = require('jsonwebtoken');
const asyncHandle = require('express-async-handler');
const User = require('../models/userModel');

const protect = asyncHandle(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // get token from a headers
      token = req.headers.authorization.split(' ')[1];

      // verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // find user with the token above
      req.user = await User.findById(decoded.id).select('-password');

      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error('Not authorized, token is invalid');
    }
  }
  if (!token) {
    res.status(401);
    throw new Error('Not Authorized, not token');
  }
});

const admin = asyncHandle(async (req, res, next) => {
  const { email } = req.user;
  const adminUser = await User.findOne({ email });
  if (adminUser.role === 'admin') {
    next();
  } else {
    res.status(401);
    throw new Error('Not authorized as admin');
  }
});

module.exports = {
  protect,
  admin,
};
