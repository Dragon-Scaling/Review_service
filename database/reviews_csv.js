const faker = require('faker');
const fs = require('fs');

const writeReviews = fs.createWriteStream('reviews.csv');
writeReviews.write('id,reviewText,reviewDate,accuracy,location,communication,checkIn,cleanliness,value,hostName,hostPic,responseDate,responseText,roomId,userId\n', 'utf8');

function writeTenMillionReviews(writer, encoding, callback) {
    let i = 50000000;
    let id = 0;
    function write() {
        let ok = true;
        do {
            i -= 1;
            id += 1;
            const getRandomInt = (min, max) => (Math.floor(Math.random() * (max - min) + min));
            const years = [2017, 2018, 2019];
            // HAS TO BE IN SQL FORMAT YYYY-MM-DD
            const chance = Math.floor(Math.random() * 10);
            if (chance !== 1) {
                    var reviewText= faker.lorem.sentence();
                    var reviewDate= `${years[Math.floor(Math.random() * 3)]}-${getRandomInt(1, 12)}-${getRandomInt(1, 28)}`;
                    var accuracy= Math.floor(Math.random() * 5);
                    var location= Math.floor(Math.random() * 5);
                    var communication= Math.floor(Math.random() * 5);
                    var checkIn= Math.floor(Math.random() * 5);
                    var cleanliness= Math.floor(Math.random() * 5);
                    var value= Math.floor(Math.random() * 5);
                    var hostName= faker.name.firstName();
                    var hostPic= faker.image.avatar();
                    var responseDate= reviewDate;
                    var responseText= faker.lorem.sentence();
                    var roomId= Math.floor(Math.random() * 999999 + 1);
                    var userId= Math.floor(Math.random() * 999999 + 1);
            } else {
                    var reviewText= faker.lorem.sentence();
                    var reviewDate= `${years[Math.floor(Math.random() * 3)]}-${getRandomInt(1, 12)}-${getRandomInt(1, 28)}`;
                    var accuracy= Math.floor(Math.random() * 5);
                    var location= Math.floor(Math.random() * 5);
                    var communication= Math.floor(Math.random() * 5);
                    var checkIn= Math.floor(Math.random() * 5);
                    var cleanliness= Math.floor(Math.random() * 5);
                    var value= Math.floor(Math.random() * 5);
                    var hostName= null
                    var hostPic= null
                    var responseDate= null;
                    var responseText= null;
                    var roomId= Math.floor(Math.random() * 999999 + 1);
                    var userId= Math.floor(Math.random() * 999999 + 1);
            }

            const data = `${id},${reviewText},${reviewDate},${accuracy},${location},${communication},${checkIn},${cleanliness},${value},${hostName},${hostPic},${responseDate},${responseText},${roomId},${userId}\n`;
            if (i === 0) {
                writer.write(data, encoding, callback);
            } else {
                // see if we should continue, or wait
                // don't pass the callback, because we're not done yet.
                ok = writer.write(data, encoding);
            }
        } while (i > 0 && ok);
        if (i > 0) {
            // had to stop early!
            // write some more once it drains
            writer.once('drain', write);
        }
    }
    write()
}

writeTenMillionReviews(writeReviews, 'utf-8', () => {
    writeReviews.end();
});