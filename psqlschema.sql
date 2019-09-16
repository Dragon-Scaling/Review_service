CREATE TABLE rooms (
  id integer PRIMARY KEY
);

CREATE TABLE users(
  id integer PRIMARY KEY,
  name varchar(50),
  picture text
);

CREATE TABLE reviews(
  id integer PRIMARY KEY,
  reviewText text,
  reviewDate varchar(50),
  accuracy smallint,
  location smallint,
  communication smallint,
  checkIn smallint,
  cleanliness smallint,
  value smallint,
  hostName varchar(50),
  hostPic text,
  responseDate varchar(50),
  responseText text,
  roomId integer,
  userId integer,
  foreign key (roomId)
     REFERENCES rooms (id),
  foreign key (userId)
     REFERENCES users (id)
);

