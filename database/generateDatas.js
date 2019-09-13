const faker = require('faker');

const generateDatas = () => {
  const years = [2017, 2018, 2019];
  let reviews = {};

  const chance = Math.floor(Math.random() * 10);
  if (chance !== 1) {
    reviews = {
      custName: faker.name.firstName(),
      custPic: faker.image.avatar(),
      date: `${faker.date.month()}, ${years[Math.floor(Math.random() * 3)]}`,
      reviewText: faker.lorem.sentence(),
      accuracy: Math.floor(Math.random() * 5),
      location: Math.floor(Math.random() * 5),
      communication: Math.floor(Math.random() * 5),
      checkIn: Math.floor(Math.random() * 5),
      cleanliness: Math.floor(Math.random() * 5),
      value: Math.floor(Math.random() * 5),
      hostName: faker.name.firstName(),
      hostPic: faker.image.avatar(),
      responseText: faker.lorem.sentence(),
      roomId: Math.floor(Math.random() * 10000000 + 1),
    };
  } else {
    reviews = {
      custName: faker.name.firstName(),
      custPic: faker.image.avatar(),
      date: `${faker.date.month()}, ${years[Math.floor(Math.random() * 3)]}`,
      reviewText: faker.lorem.sentence(),
      accuracy: Math.floor(Math.random() * 5),
      location: Math.floor(Math.random() * 5),
      communication: Math.floor(Math.random() * 5),
      checkIn: Math.floor(Math.random() * 5),
      cleanliness: Math.floor(Math.random() * 5),
      value: Math.floor(Math.random() * 5),
      hostName: null,
      hostPic: null,
      responseText: null,
      roomId: Math.floor(Math.random() * 10000000 + 1),
    };
  }

  return reviews;
};

module.exports = generateDatas;
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
