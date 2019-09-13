CREATE TABLE rooms (
  id integer PRIMARY KEY
);

CREATE TABLE users(
  id integer PRIMARY KEY,
  name text,
  pic text
);

CREATE TABLE reviews(
  id integer PRIMARY KEY,
  reviewText text,
  reviewDate date,
  accuracy smallint,
  location smallint,
  communication smallint,
  checkIn smallint,
  cleanliness smallint,
  value smallint,
  hostName text,
  hostPic text,
  responseDate date,
  responseText text,
  roomId integer,
  userId integer,
  foreign key (roomId)
     REFERENCES rooms (id),
  foreign key (userId)
     REFERENCES users (id)
);