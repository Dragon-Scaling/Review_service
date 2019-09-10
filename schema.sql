DROP DATABASE IF EXISTS reviews;

CREATE DATABASE reviews;

USE reviews;

CREATE TABLE review (
  id INT NOT NULL,
  custName VARCHAR(25),
  custDate VARCHAR(20),
  custUrl VARCHAR(100),
  custReview VARCHAR(500),
  overallRating INT,
  accuracyRating INT,
  commRating INT,
  cleanRating INT,
  locationRating INT,
  checkinRating INT,
  valueRating INT,
  hostName VARCHAR(25),
  hostDate DATE,
  hostUrl VARCHAR(100),
  hostResponse VARCHAR(500),
  listingId INT,
  PRIMARY KEY (id)
);

/*  Execute this file from the command line by typing:
 *    mysql -u <USER> < schema.sql
 *    OR
 *    mysql -u <USER> -p < schema.sql
*/