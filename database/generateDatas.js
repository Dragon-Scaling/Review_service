const faker = require('faker');

const roomsArr = [];
const usersArr = [];
const reviewsArr = [];

const generateReviewDatas = (num) => {
  const years = [2017, 2018, 2019];
  let reviews = {};

  const chance = Math.floor(Math.random() * 10);
  if (chance !== 1) {
    reviews = {
      id: num,
      reviewText: faker.lorem.sentence(),
      reviewDate: `${faker.date.month()} ${years[Math.floor(Math.random() * 3)]}`,
      accuracy: Math.floor(Math.random() * 5),
      location: Math.floor(Math.random() * 5),
      communication: Math.floor(Math.random() * 5),
      checkIn: Math.floor(Math.random() * 5),
      cleanliness: Math.floor(Math.random() * 5),
      value: Math.floor(Math.random() * 5),
      hostName: faker.name.firstName(),
      hostPic: faker.image.avatar(),
      responseText: faker.lorem.sentence(),
      roomId: num,
      userId: num,
    };
  } else {
    reviews = {
      id: num,
      reviewText: faker.lorem.sentence(),
      reviewDate: `${faker.date.month()} ${years[Math.floor(Math.random() * 3)]}`,
      accuracy: Math.floor(Math.random() * 5),
      location: Math.floor(Math.random() * 5),
      communication: Math.floor(Math.random() * 5),
      checkIn: Math.floor(Math.random() * 5),
      cleanliness: Math.floor(Math.random() * 5),
      value: Math.floor(Math.random() * 5),
      hostName: null,
      hostPic: null,
      responseText: null,
      roomId: num,
      userId: num,
    };
  }

  return reviews;
};

const generateUserDatas = (id) => {
  let user = {};
  user = {
    id,
    name: faker.name.firstName(),
    pic: faker.image.avatar(),
  };

  return user;
};

for (let i = 1; i <= 10000000; i += 1) {
  const room = { id: i };
  const user = generateUserDatas(i);
  usersArr.push(user);
  roomsArr.push(room);
}


for (let j = 1; j <= 10000000; j += 1) {
  const review = generateReviewDatas(j);
  reviewsArr.push(review);
}


console.log(reviewsArr);
/*
  id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  custName: DataTypes.STRING,
  custPic: DataTypes.STRING,
  date: DataTypes.STRING,
  reviewText: DataTypes.STRING,
  accuracy: DataTypes.INTEGER,
  location: DataTypes.INTEGER,
  communication: DataTypes.INTEGER,
  checkIn: DataTypes.INTEGER,
  cleanliness: DataTypes.INTEGER,
  value: DataTypes.INTEGER,
  hostName: DataTypes.STRING,
  hostPic: DataTypes.STRING,
  responseText: DataTypes.STRING,
  roomId
*/
