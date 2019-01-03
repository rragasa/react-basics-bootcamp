import React, { Component } from 'react';

// Template: https://getbootstrap.com/docs/4.1/components/forms/#form-grid
class Participants extends Component {
  render() {
    const participants = Array.from(Array(this.props.selectedParticipants).keys()).map(p => {
      return (
        <div className="col-sm-6" key={p}>
          <input name={`participants[${p}]`} type="text" className="form-control" placeholder="Name" autoComplete="off"
            maxLength="75" required="required" pattern="^[A-Za-z -]+$" />
        </div>
      );
    });

    return (
      <form name="participants-names" onSubmit={this.props.handleSecondStep}>
        <h1 className="display-4">Step 2: Who are they?</h1>

        <div className="row">
          {participants}
        </div>

        <button type="submit" className="btn btn-primary">Next</button>
      </form>
    );
  };
}

export default Participants;