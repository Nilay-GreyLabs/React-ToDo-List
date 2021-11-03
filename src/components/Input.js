import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '789',
      newVAl: '132',
    };
  }

  handleChange = e => {
    const name = e.target.name;
    this.setState({ [name]: e.target.value });
  };
  render() {
    return (
      <>
        <input value={this.state.value} name="value" type="text" onChange={this.handleChange} />
        <input value={this.state.newVAl} name="newVAl" type="text" onChange={this.handleChange} />
      </>
    );
  }
}

export default Input;
