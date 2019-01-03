import React, { Component } from 'react';
import Navbar from './components/Navbar';
import SelectNumber from './components/SelectNumber';
import Participants from './components/Participants';
import Matches from './components/Matches';

class App extends Component {
  state = {
    maxParticipants: 50,
    selectedParticipants: 0,
    step: 1,
    names: []
  };

  handleFirstStep = event => {
    event.preventDefault();

    const selectedParticipants = +event.target.numberOfParticipants.value;

    if (selectedParticipants >= 4) {
      this.setState({
        selectedParticipants,
        step: 2
      });
    }
  };

  handleSecondStep = event => {
    event.preventDefault();

    const names = [...document.querySelectorAll('form[name="participants-names"] input')].map(person => {
      return person.value;
    });

    this.setState({
      step: 3,
      names
    });
  };

  render() {
    return (
      <div className="container secret-santa-app">
        <Navbar />
        {this.state.step === 1 && <SelectNumber maxParticipants={this.state.maxParticipants} handleFirstStep={this.handleFirstStep} />}
        {this.state.step === 2 && <Participants selectedParticipants={this.state.selectedParticipants} handleSecondStep={this.handleSecondStep} />}
        {this.state.step === 3 && <Matches names={this.state.names} />}
      </div>
    );
  }
}

export default App;
