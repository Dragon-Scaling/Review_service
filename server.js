/* eslint-disable no-unused-vars */
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database/index.js');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static(`${__dirname}/../client/dist`));

app.get('/rooms/:id/reviews', (req, res) => {
  console.log(req.params.id);
  // db.getOne((err, results) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     res.send(results);
  //   }
  // });
});


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
