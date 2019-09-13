const { Pool } = require('pg');

const pool = new Pool({
  user: 'ingrid',
  database: 'reviews',
});

module.exports = {
  getAll: (callback) => {
    pool.query('SELECT * FROM reviews ORDER BY id ASC', (error, datas) => {
      if (error) {
        throw error;
      }
      callback(null, datas.rows);
    });
  },
};
