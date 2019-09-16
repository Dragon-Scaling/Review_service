COPY rooms
FROM '/Users/ingrid/Desktop/SDC/reviews/database/rooms.csv' DELIMITER ',' CSV HEADER;

COPY users
FROM '/Users/ingrid/Desktop/SDC/reviews/database/users.csv' DELIMITER ',' CSV HEADER;

COPY reviews
FROM '/Users/ingrid/Desktop/SDC/reviews/database/reviews.csv' DELIMITER ',' CSV HEADER;
