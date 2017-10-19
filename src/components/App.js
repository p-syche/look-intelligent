import React, { Component } from 'react';
import Menu from './Menu';
import Content from './Content';

import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2 className="title">Look Intelligent</h2>
        <Menu />
        <Content />
      </div>
    );
  }
}

export default App;
