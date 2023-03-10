const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      requiredd: true,
    },
    quantity: {
      type: Number,
      required: true,
      //select: false, // hide this information from user
    },
    sold: {
      type: Number,
      default: 0,
      //select: false, // hide this information from user
    },
    images: [],
    color: {
      type: String,
      required: true,
      // enum: ['Black', 'Brown', 'Red'],
    },
    rating: [
      {
        star: Number,
        comment: String,
        postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      },
    ],
    totalrating: {
      type: String,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

//Export the model
module.exports = mongoose.model('Product', productSchema);
