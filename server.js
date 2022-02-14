const PORT = 5000;
const axios = require('axios').default;
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());

app.get('/', (req,res) => {
    res.json('hi there')
})

app.get('/results', (req,res) => {
    const passedLevel = req.query.level
    console.log('the request is', req.query.level)
    var options = {
        method: 'GET',
        url: 'https://twinword-word-association-quiz.p.rapidapi.com/type1/',
        params: { level: passedLevel, area: 'sat' },
        headers: {
          'x-rapidapi-host': 'twinword-word-association-quiz.p.rapidapi.com',
          'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY
        }
      };
  
      axios.request(options).then((response) => {
        console.log(response.data)
        res.json(response.data)
      }).catch((error) => {
        console.error(error);
      });
})

app.listen(PORT, () => console.log(`backend running on PORT ${PORT}`))