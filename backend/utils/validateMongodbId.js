const mongoose = require('mongoose');

const validMongoDbId = (id) => {
  const valid = mongoose.Types.ObjectId.isValid(id);
  if (!valid) {
    throw new Error('This id is not valid, or not found');
  }
};

module.exports = validMongoDbId;
