import axios from 'axios';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Cards from ".//Cards.js";

const App = () => {

  const [chosenLevel, setChosenLevel] = useState('2')
  const [words, setWords] = useState(null)

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
      setWords(response.data);
    }).catch((error) => {
      console.error(error);
    });
  }

  console.log('WORDS ARE:', words)

  const returnToLevel = () => {
    setChosenLevel(false)
  }

  useEffect(() => {
    if (chosenLevel) {
      getRandomWords()
    }
  }, [chosenLevel])


  return (
    <div className="wrapper">
      <header>
        <img src="./pics/background.png" class="background" />
        <img src="./pics/at3.png" class="foreground" />
      </header>
      <div className="App">
        {!chosenLevel && <div className="level-selector">
          <h1 class="title-two">Word Association App</h1>
          <p class="title-two">Select your level to start</p>
          <Box sx={{ minWidth: 420, backgroundColor: "white", borderRadius: 3, padding: .3 }}>
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
          {chosenLevel && <div>
            <h1 className='level-choose'>Welcome to level: {chosenLevel} </h1>
            <button className='level-choose-button' onClick={returnToLevel}>Return</button>
            {words == null ? <div></div> : <Cards words={words} />}
          </div>
        
        }
        
      </div>
    </div>
  );
}

export default App;
