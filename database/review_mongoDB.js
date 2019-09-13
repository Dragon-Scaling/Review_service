let roomSchema = new mongoose.Schema({
  id: Number,
});

let reviewSchema = new mongoose.Schema({
  id: Number,
  date: String,
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

let userSchema = new mongoose.Schema({
  id: Number,
  name: String,
  pic: String,
  createdAt: Date.now(),
  updatedAt: Date.now(),
});
