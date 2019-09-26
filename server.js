/* eslint-disable no-unused-vars */
const nr = require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database/index.js');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3003;


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('client/dist'))
app.use(`/listing/:id`,express.static('client/dist'))


app.get('/api/rooms/:id/reviews', (req, res) => {
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

app.get('/api/rooms/:roomId/reviews/:reviewId', (req, res) => {
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

app.post('/api/rooms/:id/reviews', (req, res) => {
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

app.put('/api/rooms/:roomId/reviews/:reviewId', (req, res) => {
  let materials = {
    ids: req.params,
    material: req.body,
  };

  db.update(materials, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.send('update success!')
    }
  })
})

app.delete('api/reviews/:id', (req, res) => {
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
