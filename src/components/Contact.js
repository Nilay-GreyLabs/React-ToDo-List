import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
// import ContactRoutes from '../routes/ContactRoute';

import Form from '../components/Form';
import ContactList from '../components/ContactList';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      list: [
        { name: 'Nilay', email: 'adf@gad.com' },
        { name: 'NIlay', email: 'adf@gad.com' },
      ],
    };
  }

  handleChange = e => {
    let value = e.target.value;
    let name = e.target.name;

    this.setState({
      [name]: [value],
    });
  };

  addItem = () => {
    const itm = {
      name: this.state.name,
      email: this.state.email,
    };
    // this.state.list.push(itm); //returns num of ele after push
    // this.setState({
    //     list: this.state.list.concat(itm),
    // });
    this.setState({
      list: [...this.state.list, itm],
      name: '',
      email: '',
    });

    this.props.history.push('/contacts');
  };

  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/contacts" exact component={props => <ContactList {...props} list={this.state.} />} />

          <Route path="/contacts/addcontact" exact>
            <Form handleChange={this.handleChange} addItem={this.addItem} name={this.state.name} email={this.state.email} />
          </Route>
        </Switch>
      </React.Fragment>
    );
  }
}

export default Contact;
