import React, { Component } from 'react';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <div className="container secret-santa-app">
        <Navbar />
      </div>
    );
  }
}

export default App;
