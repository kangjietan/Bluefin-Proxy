import React from 'react';
import axios from 'axios';

const App = () => (
  axios.get('http://localhost:3000/listings-carousel')
    .then((bundle) => {
      console.log(typeof bundle);
    })
    .catch((err) => {
      console.log(typeof err);
    })
);

export default App;
