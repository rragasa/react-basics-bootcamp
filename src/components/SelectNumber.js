import React, { Component } from 'react';

// Template: https://getbootstrap.com/docs/4.1/components/forms/#inline-forms
class SelectNumber extends Component {
  render() {
    const options = Array.from(Array(this.props.maxParticipants).keys()).map(i => i + 1).filter(i => i % 2 === 0);
    options.shift();

    const selectOptions = options.map(option => {
      return (
        <option key={option} value={option}>{option}</option>
      );
    });

    return (
      <form name="participants-number" onSubmit={this.props.handleFirstStep}>
        <h1 className="display-4">Step 1: Select the number of participants</h1>

        <div className="form-row align-items-center">
          <div className="col-auto my-1">
            <label className="mr-sm-2 sr-only" htmlFor="numberOfParticipants">Preference</label>
            <select name="numberOfParticipants" className="custom-select mr-sm-2" id="numberOfParticipants" required="required">
              <option defaultValue>Choose...</option>
              {selectOptions}
            </select>
          </div>
          <div className="col-auto my-1">
            <button type="submit" className="btn btn-primary">Next</button>
          </div>
        </div>
      </form>
    );
  }
}

export default SelectNumber;