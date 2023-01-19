const mongoose = require('mongoose'); // Erase if already required
const bcrypt = require('bcrypt');
const crypto = require('crypto');

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    mobile: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: 'user',
    },
    isBlock: {
      type: Boolean,
      default: false,
    },
    cart: {
      type: Array,
      default: [],
    },
    address: {
      type: String,
    },
    wishlist: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
      },
    ],
    refreshToken: {
      type: String,
    },
    passwordChangeAt: Date,
    passwordRestToken: String,
    passwordResetExpired: Date,
  },
  {
    timestamps: true,
  }
);

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }
  // hash password
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// check password match when login

userSchema.methods.isPasswordMatched = async function (enterPassword) {
  return await bcrypt.compare(enterPassword, this.password);
};

userSchema.methods.createPasswordResetToken = async function () {
  const resettoken = crypto.randomBytes(32).toString('hex');
  this.passwordRestToken = crypto
    .createHash('sha256')
    .update(resettoken)
    .digest('hex');
  this.passwordResetExpired = Date.now() + 30 * 60 * 1000; // 10 minutes will be expired
  return resettoken;
};

//Export the model
module.exports = mongoose.model('User', userSchema);
