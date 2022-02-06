import axios from 'axios';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const App = () => {

  const [chosenLevel, setChosenLevel] = useState(null)

  const getRandomWords = () => {

    var options = {
      method: 'GET',
      url: 'https://twinword-word-association-quiz.p.rapidapi.com/type1/',
      params: { level: chosenLevel, area: 'sat' },
      headers: {
        'x-rapidapi-host': 'twinword-word-association-quiz.p.rapidapi.com',
        'x-rapidapi-key': 'bb38151e24msha271fe5e90f5b03p151d27jsnabf027f0721e'
      }
    };

    axios.request(options).then((response) => {
      console.log(response.data);
    }).catch((error) => {
      console.error(error);
    });
  }

  console.log('chosen level', chosenLevel)

  useEffect(() => {
    if(chosenLevel) {
      getRandomWords()
    }
  },[chosenLevel])


  return (
    <div className="App">
      {!chosenLevel && <div className="level-selector">
        <h1>Word Association App</h1>
        <p>Select your level to start</p>
        <Box sx={{ maxWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="select">Levels</InputLabel>
            <Select
              labelId="select"
              id="levels"
              value={chosenLevel}
              label="levels"
              onChange={(event) => setChosenLevel(event.target.value)}
            >
              <MenuItem value={1}>Level 1</MenuItem>
              <MenuItem value={2}>Level 2</MenuItem>
              <MenuItem value={3}>Level 3</MenuItem>
              <MenuItem value={4}>Level 4</MenuItem>
              <MenuItem value={5}>Level 5</MenuItem>
              <MenuItem value={6}>Level 6</MenuItem>
              <MenuItem value={7}>Level 7</MenuItem>
              <MenuItem value={8}>Level 8</MenuItem>
              <MenuItem value={9}>Level 9</MenuItem>
              <MenuItem value={10}>Level 10</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>}
      {chosenLevel &&<div className="question-area">
        <h1>Welcome to level: {chosenLevel} </h1>
      </div>}
    </div>
  );
}

export default App;
