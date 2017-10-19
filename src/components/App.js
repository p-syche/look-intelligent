import React, { Component } from 'react';

// import base from '../base';
import Menu from './Menu';
import Main from './Main';

import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2 className="title">Look Intelligent</h2>
        <Menu />
        <Main />
      </div>
    );
  }
}

export default App;
