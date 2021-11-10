import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
       Email: <br />
        <input type='email' name='email' onChange={this.props.handleChange}/><br/>
        name: <br />
        <input type='text'  name='name' onChange={this.props.handleChange}/><br/>
        <button onClick={this.props.addItem}>Save</button>
      </React.Fragment>
    );
  }
}

export default Form;
