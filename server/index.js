const express = require('express');
const axios = require('axios');
const path = require('path');

const mainApp = express();
const mainPort = 3000;

const filePath = path.join(__dirname, '..', 'public');
mainApp.use(express.static(filePath));

mainApp.get('/mortgage-calculator.js', (req, res) => {
  axios.get('http://localhost:4003/dist/bundle.js')
    .then((bundle) => {
      res.status(200);
      res.send(bundle.data);
    })
    .catch((err) => {
      console.log('Error fetching from mortgage calculator server');
      res.status(500);
      res.send(err);
    });
});

mainApp.get('/calculator:listingId', (req, res) => {
  const { listingId } = req.params;
  axios.get(`http://localhost:4003/calculator${listingId}`)
    .then((info) => {
      res.status(200);
      res.send(info.data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.end();
    });
});

mainApp.get('/tour-scheduler.js', (req, res) => {
  axios.get('http://localhost:3002/bundle.js')
    .then((bundle) => {
      res.status(200);
      res.send(bundle.data);
    })
    .catch((err) => {
      console.log('Error fetching from tour scheduler server');
      res.status(500);
      res.send(err);
    });
});

mainApp.get('/house', (req, res) => {
  const q = (req.query);
  const id = q.listingId;
  axios.get(`http://localhost:3002/house?listingId=${id}`)
    .then((info) => {
      res.status(200);
      res.send(info.data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.end();
    });
});

mainApp.get('/schedule', (req, res) => {
  axios.get('http://localhost:3002/schedule')
    .then((info) => {
      res.status(200);
      res.send(info.data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.end();
    });
});

mainApp.get('/listings-carousel.js', (req, res) => {
  axios.get('http://localhost:4004/dist/bundle.js')
    .then((bundle) => {
      res.status(200);
      res.send(bundle.data);
    })
    .catch((err) => {
      console.log('Error fetching from listings carousel server');
      res.status(500);
      res.end(err);
    });
});

mainApp.get('/similar-listings', (req, res) => {
  axios.get('http://localhost:4004/similar-listings')
    .then((info) => {
      res.status(200);
      res.send(info.data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.end();
    });
});

mainApp.listen(mainPort, () => {
  console.log(`Main App is listening on port ${mainPort}, only use to serve up static HTML files.`);
});
