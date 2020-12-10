import React, { Component } from 'react';
import './App.css';
import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';


/**function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Autocomplete
          id="combo-box-demo"
          options={programs}
          getOptionLabel={(option) => option.title}
          style={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
        />
      </div>
    </div>
  );
}

const programs = Program;
console.log(programs);

export default App;
*/
class App extends Component {

  state = {
    data: []
  };

  componentDidMount() {
    console.log("Hejsan");
    this.callBackendApi()
      .then(res => this.setState({ data: res }))
      .catch(error => console.log(error));
  };

  callBackendApi = async () => {
    const result = [];
    const response = await fetch('/programs');
    const programs = await response.json();
    console.log("Här är jag" + programs);
    //const programs = JSON.parse(data);
    if (response.status !== 200) {
      
      throw Error(response.message);
    };
    /*for (var i in programs){
      result.push(programs[i]);
    };*/
    console.log('RESULTATET: ' + result);
    return programs;
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Autocomplete
            id="combo-box-demo"
            options={this.state.data}
            getOptionLabel={(option) => option.title}
            style={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
          />
          
        </div>
      </div>
    );
  }
}


export default App;
//<p>{this.state.data}</p>

/*, {
  headers : { 
    'Content-Type': 'application/json',
    'Accept': 'application/json'
   }

}*/