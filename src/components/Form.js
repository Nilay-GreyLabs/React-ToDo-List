import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'email',
      name: 'name',
      currEmail: 'currEmail',
      currName: 'currName',

    }
  }
  render() {

    const { name, currName, email, currEmail } = this.state;
    return (
      <React.Fragment>
        {
          this.props.action === 'update' ?
        <>
            name: <br />

            <input type='text' 
            name={currName} 
            value={this.props.currName}
            onChange={this.props.handleChange} /><br />

            Email: <br />
            <input type='email' 
            name={currEmail} 
            value={this.props.currEmail} 
            onChange={this.props.handleChange} /><br />
            
            <button onClick={this.props.updateItem}>{this.props.action}</button>
            <Link to='/contacts'><button>back</button></Link> 
        </>

        : 
        <>
        
            name: <br />
            <input type='text' 
            name={name} 
            value={this.props.userName} 
            onChange={this.props.handleChange} /><br />

            Email: <br />
            <input 
            type='email' 
            name={email} 
            value={this.props.userEmail} 
            onChange={this.props.handleChange} /><br />

            <button 
            onClick={this.props.addItem}>{this.props.action}</button>
            <Link to='/contacts'><button>back</button></Link> 
        </>
        }
      </React.Fragment>
    );
  }
}

export default Form;
