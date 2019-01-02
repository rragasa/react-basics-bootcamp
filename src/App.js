import React, { Component } from 'react';
import Navbar from './components/Navbar';
import SelectNumber from './components/SelectNumber';

class App extends Component {
  state = {
    maxParticipants: 50,
    selectedParticipants: 0
  };

  handleStep1 = event => {
    event.preventDefault();

    this.setState({
      selectedParticipants: +event.target.numberOfParticipants.value
    });
  };

  render() {
    return (
      <div className="container">
        <Navbar />
        <SelectNumber maxParticipants={this.state.maxParticipants} handleStep1={this.handleStep1} />
      </div>
    );
  }
}

export default App;
