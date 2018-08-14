import React, { Component } from 'react';
  import './App.css';
import AppDos from "./components/AppDos"
import InputText from "./components/InputText"

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <AppDos />      
      <InputText />     
      </React.Fragment>
    );
  }
}

export default App;
