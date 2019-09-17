const { Pool } = require('pg');

const pool = new Pool({
  user: 'ingrid',
  database: 'reviews',
});

module.exports = {
  getAll: (id, callback) => {
    pool.query(`SELECT * FROM reviews WHERE roomId = ${id} ORDER BY id ASC`, (error, datas) => {
      if (error) {
        throw error;
      }
      callback(null, datas.rows);
    });
  },

  getOne: (ids, callback) => {
    // console.log(ids);
    //{ roomId: '210329', reviewId: '746820' }
    pool.query(`SELECT * FROM reviews WHERE roomId = ${ids.roomId} AND id = ${ids.reviewId} ORDER BY id ASC`, (error, datas) => {
      if (error) {
        throw error;
      }
      // console.log(datas.rows);
      let findUser = datas.rows[0];
      // console.log(findUser.userid);
      pool.query(`SELECT * FROM users INNER JOIN reviews ON reviews.userid = users.id WHERE users.id = ${findUser.userid} AND reviews.id = ${ids.reviewId}`, (err, data) => {
        if (error) {
          throw error;
        }
        // console.log(data);
        callback(null, data.rows);
      })
    });
  },

  create: (element, callback) => {
    // console.log(element.body);
    const text = 'INSERT INTO reviews(id, reviewtext, reviewdate, accuracy, location, communication, checkin, cleanliness, value, hostname, hostpic, responsedate, responsetext, roomid, userid) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15) RETURNING *'
    const values = Object.values(element.body);
    // console.log(values);
    pool.query(text, values, (err, result) => {
      if(err) throw err;
      // console.log('post', result);
      callback(null, result);
    })
  },

  remove: (id, callback) => {
    pool.query(`delete from reviews where id = ${id}`, (err, result)=>{
      if(err) throw err;
      callback(null, result);
    })
  }
};

/*
  "id": 39000001,
  "reviewtext": "Unde cum et aut suscipit perspiciatis consequatur dolor fugit eos.",
  "reviewdate": "2017-08-17T07:00:00.000Z",
  "accuracy": 3,
  "location": 4,
  "communication": 1,
  "checkin": 2,
  "cleanliness": 1,
  "value": 0,
  "hostname": "Zander",
  "hostpic": "https://s3.amazonaws.com/uifaces/faces/twitter/helderleal/128.jpg",
  "responsedate": "2017-08-10T07:00:00.000Z",
  "responsetext": "Error aut in in culpa.",
  "roomid": 210329,
  "userid": 967702


*/
