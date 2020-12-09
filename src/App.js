import React from 'react';
import './App.css';
import {TextField} from '@material-ui/core';
import {Autocomplete} from '@material-ui/lab';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Autocomplete
          id="combo-box-demo"
          options={top100Films}
          getOptionLabel={(option) => option.title}
          style={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
        />
      </div>
    </div>
  );
}

const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 }
]

export default App;
