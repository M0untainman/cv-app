import React, { Component } from 'react';

class PersonInfoInput extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      surname: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.acceptInfo = this.acceptInfo.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  acceptInfo = (e) => {
    e.preventDefault();
    this.setState({
      name: this.state.name,
    });
    console.log(this.state.name);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.acceptInfo}>
          {' '}
          <label>
            Name:
            <input
              type='text'
              value={this.state.name.text}
              onChange={this.handleChange}
            />{' '}
          </label>
          <input type='submit' value='Submit' />
        </form>
      </div>
    );
  }
}

export default PersonInfoInput;
