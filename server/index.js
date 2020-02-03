const express = require('express');

const mainApp = express();
const mainPort = 3000;

const AppPort1 = 3001;
const AppPort2 = 3002;
const AppPort3 = 3003;

mainApp.use(express.static('public'));

mainApp.get('/mortgage-calculator', (req, res) => {

});

mainApp.get('/tour-scheduler', (req, res) => {

});

mainApp.get('/listings-carousel', (req, res) => {

});

mainApp.listen(mainPort, () => {
  console.log(`Main App is listening on port ${mainPort}, only use to serve up static HTML files.`);
});
