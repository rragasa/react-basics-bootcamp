import React, { Component } from 'react';

class Matches extends Component {
  state = {
    offer: [],
    receive: []
  };

  // Fisher-Yates Shuffle - Source: https://stackoverflow.com/a/6274398/979010
  shuffle = array => {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
      // Pick a random index
      let index = Math.floor(Math.random() * counter);

      // Decrease counter by 1
      counter--;

      // And swap the last element with it
      let temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
    }

    return array;
  };

  selectRandom = array => array[Math.floor(Math.random() * array.length)];

  componentDidMount = () => {
    const shuffledNames = this.shuffle(this.props.names),
      offer = [],
      receive = [];

    let nameToOffer, nameToReceive;

    while ((offer.length !== shuffledNames.length) || (receive.length !== shuffledNames.length)) {
      nameToOffer = this.selectRandom(shuffledNames);
      nameToReceive = this.selectRandom(shuffledNames);

      if ((offer.length !== shuffledNames.length) && !offer.includes(nameToOffer)) {
        offer.push(nameToOffer);
      }

      if ((receive.length !== shuffledNames.length) && !receive.includes(nameToReceive)) {
        receive.push(nameToReceive);

        if (offer[receive.length - 1] === nameToReceive) {
          receive.pop();
        }
      }
    }

    this.setState({ offer, receive });
  };


  // Template: https://getbootstrap.com/docs/4.2/content/tables/
  render() {
    let matches = [];

    if (this.state.offer.length && this.state.receive.length) {
      matches = this.state.offer.map((value, key) => {
        return (
          <tr key={key}>
            <th scope="row">{key + 1}</th>
            <td>{value}</td>
            <td>{this.state.receive[key]}</td>
          </tr>
        );
      });
    }

    return matches && (
      <React.Fragment>
        <h1 className="display-4">Step 3: The matches!</h1>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Offers</th>
              <th scope="col">Receives</th>
            </tr>
          </thead>
          <tbody>
            {matches}
          </tbody>
        </table>
      </React.Fragment>
    );
  };
}

export default Matches;