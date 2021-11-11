import React, { Component } from 'react';
import api from '../api/contactsApi';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
// import ContactRoutes from '../routes/ContactRoute';

import Form from './Form';
import ContactList from './ContactList';
import Preview from './preview';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      list: [],
    };
  }

  retrievedContacts = async () => {
    const response = await api.get("/contacts");
    if (response.data){
      console.log('got the data')
      this.setState({list: response.data})
    }
    // return response.data;
  }

  componentDidMount = () => {
    this.retrievedContacts();
  }

  // setting up retrieved data in list
  // componentDidMount = () => {
  //   const getAllData = async () => {
  //     // this.setState({list: await this.retrievedContacts()})
  //     const allData = await this.retrievedContacts();
  //     if (allData) this.setState({list: allData});
  //   }
  //   getAllData();
  // }

  handleChange = e => {
    let value = e.target.value;
    let name = e.target.name;

    this.setState({
      [name]: [value],
    });
  };

  // for unique id
  date = () => {
    let d = Date.now();
    let r = Math.random() * 1000;
    let num = Math.floor(r);

    return num + d;
  };
  addItem = () => {
    const itm = {
      name: this.state.name,
      email: this.state.email,
      id: this.date(),
    };
    // this.state.list.push(itm); //returns length after push
    // this.setState({
    //     list: this.state.list.concat(itm),
    // });

    // if no name then add default
    if (!itm.name) {
      itm.name = `user ${this.state.list.length + 1}`;
    }

    this.setState({
      list: [...this.state.list, itm],
      name: '',
      email: '',
    });
    console.log(itm);
    this.props.history.push('/contacts');
  };

  // local storage
  // after redering local data will be assigned to list
  // componentDidMount = () => {
  //   const retrieve = JSON.parse(localStorage.getItem(this.local_key));
  //   if (retrieve) this.setState({ ...this.state, list: retrieve });
  // };

  // local_key = 'CONTACTS';
  // componentDidUpdate = () => {
  //   localStorage.setItem(this.local_key, JSON.stringify(this.state.list));
  // };

  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/contacts" exact component={props => <ContactList {...props} list={this.state.list} />} />

          <Route path="/contacts/addcontact" exact>
            <Form handleChange={this.handleChange} addItem={this.addItem} name={this.state.name} email={this.state.email} />
          </Route>

          <Route path={`/contacts/`}>
            <Preview />
          </Route>
        </Switch>
      </React.Fragment>
    );
  }
}

export default Contact;
