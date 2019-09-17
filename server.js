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
  // console.log(req.params.id);
  let id = req.params.id;
  db.getAll(id, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.send(results);
    }
  });
});

app.get('/rooms/:roomId/reviews/:reviewId', (req, res) => {
  // console.log(req.params);
  let ids = req.params;
  db.getOne(ids, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.send(results);
    }
  });
});

app.post('/rooms/:id/reviews', (req, res) => {
  // console.log(req.body, req.params.id);
  let createEle = {
    id: req.params.id,
    body: req.body
  }
  db.create(createEle, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.send('success!')
    }
  })
})

app.delete('/reviews/:id', (req, res) => {
  let id = req.params.id;

  db.remove(id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send('delete!')
    }
  })
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

/*
- Update / PUT - '/rooms/:id/reviews/:id'
*/