const Pool = require('pg').Pool
const pool = new Pool({
  user: 'ingrid',
  host: 'localhost',
  database: 'reviews',
  port: '',
})
