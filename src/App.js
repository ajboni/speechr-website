import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Page from './home';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Page />
      </div>
    );
  }
}

export default App;
