const { Pool } = require('pg');

const pool = new Pool({
  user: 'ingrid',
  database: 'reviews',
});


// pool.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   pool.end()
// })

module.exports = {
  getAll: (id, callback) => {
    // console.log('inside index')
    pool.query(`SELECT * FROM users INNER JOIN reviews ON reviews.userid = users.id WHERE reviews.roomId = ${id}`, (error, datas) => {
      if (error) {
        throw error;
      }
      // console.log(datas.rows);
      callback(null, datas.rows);
    });
  },

  getOne: (ids, callback) => {
    // console.log(ids);
    //{ roomId: '210329', reviewId: '19297081' }
    pool.query(`SELECT * FROM users INNER JOIN reviews ON reviews.userid = users.id WHERE reviews.roomId = ${ids.roomId} AND reviews.id = ${ids.reviewId}`, (error, datas) => {
      if (error) {
        throw error;
      }
      callback(null, datas.rows);
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

  update: (materials, callback) => {
    //{ roomId: '210329', reviewId: '746820' }
    //update reviews set accuracy = 1 where id = 39000001;
    //{ ids: { roomId: '1', reviewId: '1' },material: { text: 'test' } }
    const key = Object.keys(materials.material);
    const value = Object.values(materials.material)
    pool.query(`UPDATE reviews SET ${key[0]} = ${value[0]} WHERE roomId = ${materials.ids.roomId} AND id = ${materials.ids.reviewId}`, (err, result) => {
      if(err) throw err;
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

