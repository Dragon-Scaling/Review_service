const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/reviews');

const userSchema = mongoose.Schema({
  id: Number,
  name: String,
  picture: String,
  createdAt: Date.now(),
  updatedAt: Date.now(),
});

const reviewSchema = mongoose.Schema({
  id: Number,
  name: String,
  picture: String,
  reviewDate: String,
  reviewText: String,
  accuracy: Number,
  location: Number,
  communication: Number,
  checkIn: Number,
  cleanliness: Number,
  value: Number,
  hostName: String,
  hostPic: String,
  responseDate: Number,
  responseText: String,
  roomId: Number,
  userId: Number,
  createdAt: Date.now(),
  updatedAt: Date.now(),
});


module.exports = mongoose.model('Review', reviewSchema);
module.exports = mongoose.model('User', userSchema);

// mongoimport -d reviews -c reviews --type csv --file reviews_9.csv --headerline
