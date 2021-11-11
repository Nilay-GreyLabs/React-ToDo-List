import React, { Component } from 'react';
import Form from '../components/Form';
import ContactList from '../components/ContactList';
import { Route, Switch } from 'react-router';

class ContactRoutes extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Switch>
        <Route path="/contact" component={Form} exact />
        <Route path="/contact/saved" exact >
            {/* <ContactList list={}/> */}
        </Route>
      </Switch>
    );
  }
}

export default ContactRoutes;
