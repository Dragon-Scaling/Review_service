const faker = require('faker');
const db = require('./index.js');

function generateReviews() {

  let reviews = [];
  let total = 3;

  //10% of customers use/purchase same item or listing in more than one occasion
  let ninetyPercent = Math.ceil(total * 0.9);
  let custNamePool = [];
  for (let count = 1; count <= ninetyPercent; count++) {
    custNamePool.push(faker.name.firstName());
  }

  //custDate


  //custUrl


  //25% of hosts have more than 1 listing
  let hostNamePool = [];
  for (let count = 1; count <= 75; count++) {
    hostNamePool.push(faker.name.firstName());
  }


  //25% of reviews have a response from host



  //determine # of reviews to randomly generate (id)
  for (let id = 1; id <= total; id++) {

    let custName = faker.name.firstName();
    let tempDate = faker.date.past().toString();
    let custDate = tempDate.slice(4,15);
    let custUrl = faker.image.avatar();
    let custReview = faker.lorem.paragraph();
    let overallRating = Math.floor(Math.random() * 6);
    let accuracyRating = Math.floor(Math.random() * 6);
    let commRating = Math.floor(Math.random() * 6);
    let cleanRating = Math.floor(Math.random() * 6);
    let locationRating = Math.floor(Math.random() * 6);
    let checkinRating = Math.floor(Math.random() * 6);
    let valueRating = Math.floor(Math.random() * 6);
    let hostName = faker.name.firstName();
    let hostDate = faker.date.recent();
    let hostUrl = faker.image.avatar();
    let hostResponse = faker.lorem.paragraph();
    let listingId = Math.floor(Math.random() * 101);

//need to account for smaller pool of hosts, customer names, and consistent name to url(picture)

    reviews.push({
        "id": id,
        "custName": custName,
        "custDate": custDate,
        "custUrl": custUrl,
        "custReview": custReview,
        "overallRating": overallRating,
        "accuracyRating": accuracyRating,
        "commRating": commRating,
        "cleanRating": cleanRating,
        "locationRating": locationRating,
        "checkinRating": checkinRating,
        "valueRating": valueRating,
        "hostName": hostName,
        "hostDate": hostDate,
        "hostUrl": hostUrl,
        "hostResponse": hostResponse,
        "listingId": listingId
    });

    reviews.sort(function(a,b) {
      return new Date(b.custDate) - new Date(a.custDate);
    });
  }

  return reviews;
}

let reviewsData = generateReviews();

for (let i = 0; i < reviewsData.length; i++) {
  db.seedData(reviewsData[i], (err) => {
    if (err) {
      console.log(err);
    }
  });
};

module.exports.reviewsData = reviewsData;