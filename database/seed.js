const generateDatas = require('./generateDatas.js');
const models = require('./models/index.js');


// for (let i = 1; i <= 10000000; i += 1) {
//   models.models.Room.create({
//     id: i,
//   });
// }

for (let i = 1; i <= 250000000; i += 1) {
  const reviewsDatas = generateDatas();
  models.models.Review.create({
    id: i,
    custName: reviewsDatas.custName,
    custPic: reviewsDatas.custPic,
    date: reviewsDatas.date,
    reviewText: reviewsDatas.reviewText,
    accuracy: reviewsDatas.accuracy,
    location: reviewsDatas.location,
    communication: reviewsDatas.communication,
    checkIn: reviewsDatas.checkIn,
    cleanliness: reviewsDatas.cleanliness,
    value: reviewsDatas.value,
    hostName: reviewsDatas.hostName,
    hostPic: reviewsDatas.hostPic,
    responseText: reviewsDatas.responseText,
    roomId: reviewsDatas.roomId,
  });
}

console.log('done');
