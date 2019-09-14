const faker = require('faker');
const fs = require('fs');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;


const roomCsvWriter = createCsvWriter({
  path: 'rooms_1.csv',
  header: [
    { id: 'id', title: 'id' },
  ],
});


const userCsvWriter = createCsvWriter({
  path: 'users_4.csv',
  header: [
    { id: 'id', title: 'id' },
    { id: 'name', title: 'name' },
    { id: 'picture', title: 'picture' },
  ],
});

const reviewCsvWriter = createCsvWriter({
  path: 'reviews_12.csv',
  header: [
    { id: 'id', title: 'id' },
    { id: 'reviewText', title: 'reviewText' },
    { id: 'reviewDate', title: 'reviewDate' },
    { id: 'accuracy', title: 'accuracy' },
    { id: 'location', title: 'location' },
    { id: 'communication', title: 'communication' },
    { id: 'checkIn', title: 'checkIn' },
    { id: 'cleanliness', title: 'cleanliness' },
    { id: 'value', title: 'value' },
    { id: 'hostName', title: 'hostName' },
    { id: 'hostPic', title: 'hostPic' },
    { id: 'responseDate', title: 'responseDate' },
    { id: 'responseText', title: 'responseText' },
    { id: 'roomId', title: 'roomId' },
    { id: 'userId', title: 'userId' },
  ],
});


const roomsArr = [];
const usersArr = [];
const reviewsArr = [];

const getRandomInt = (min, max) => (Math.floor(Math.random() * (max - min) + min));

const generateReviewDatas = (num) => {
  const years = [2017, 2018, 2019];
  let reviews = {};

  // HAS TO BE IN SQL FORMAT YYYY-MM-DD
  const chance = Math.floor(Math.random() * 10);
  if (chance !== 1) {
    reviews = {
      id: num,
      reviewText: faker.lorem.sentence(),
      reviewDate: `${years[Math.floor(Math.random() * 3)]}-${getRandomInt(1, 12)}-${getRandomInt(1, 28)}`,
      accuracy: Math.floor(Math.random() * 5),
      location: Math.floor(Math.random() * 5),
      communication: Math.floor(Math.random() * 5),
      checkIn: Math.floor(Math.random() * 5),
      cleanliness: Math.floor(Math.random() * 5),
      value: Math.floor(Math.random() * 5),
      hostName: faker.name.firstName(),
      hostPic: faker.image.avatar(),
      responseDate: `${years[Math.floor(Math.random() * 3)]}-${getRandomInt(1, 12)}-${getRandomInt(1, 28)}`,
      responseText: faker.lorem.sentence(),
      roomId: Math.floor(Math.random() * 999999 + 1),
      userId: Math.floor(Math.random() * 999999 + 1),
    };
  } else {
    reviews = {
      id: num,
      reviewText: faker.lorem.sentence(),
      reviewDate: `${years[Math.floor(Math.random() * 3)]}-${getRandomInt(1, 12)}-${getRandomInt(1, 28)}`,
      accuracy: Math.floor(Math.random() * 5),
      location: Math.floor(Math.random() * 5),
      communication: Math.floor(Math.random() * 5),
      checkIn: Math.floor(Math.random() * 5),
      cleanliness: Math.floor(Math.random() * 5),
      value: Math.floor(Math.random() * 5),
      hostName: null,
      hostPic: null,
      responseDate: null,
      responseText: null,
      roomId: Math.floor(Math.random() * 999999 + 1),
      userId: Math.floor(Math.random() * 999999 + 1),
    };
  }

  return reviews;
};

const generateUserDatas = (id) => {
  let user = {};
  user = {
    id,
    name: faker.name.firstName(),
    picture: faker.image.avatar(),
  };

  return user;
};

for (let i = 9000001; i <= 10000000; i += 1) {
  const room = { id: i };
  const user = generateUserDatas(i);
  usersArr.push(user);
  roomsArr.push(room);
}


for (let j = 36000001; j <= 39000000; j += 1) {
  const review = generateReviewDatas(j);
  reviewsArr.push(review);
}


roomCsvWriter
  .writeRecords(roomsArr)
  .then(() => console.log('The CSV file was written successfully'));


userCsvWriter
  .writeRecords(usersArr)
  .then(() => console.log('The CSV file was written successfully'));

reviewCsvWriter
  .writeRecords(reviewsArr)
  .then(() => console.log('The CSV file was written successfully'));
