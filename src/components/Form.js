import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Form extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
       Email: <br />
        <input type='email' name='email' value={this.props.email} onChange={this.props.handleChange}/><br/>
        name: <br />
        <input type='text'  name='name' value={this.props.name} onChange={this.props.handleChange}/><br/>
        <button onClick={this.props.addItem}>{this.props.btnName}</button>
        <Link to='/contacts'><button>back</button></Link>
      </React.Fragment>
    );
  }
}

export default Form;
