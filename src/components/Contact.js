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
      isLoading: true,
    };
  }

  retrievedContacts = async () => {
    const response = await api.get('/contacts');
    if (response.data) {
      console.log('got the data');
      this.setState({ list: response.data });
      this.setState({ isLoading: false });
    }
    // return response.data;
  };

  componentDidMount = () => {
    this.retrievedContacts();
  };

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

  addItem = async () => {
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

    // api.post('/contacts', itm); //it adds data directly
    const response = await api.post('/contacts', itm);

    this.setState({
      // list: [...this.state.list, itm],
      list: [...this.state.list, response.data],
      name: '',
      email: '',
    });
    console.log(itm);
    this.props.history.push('/contacts');
  };

  // removing item
  removeItem = async ({ id }) => {
    // console.log('dele', id)
    await api.delete(`/contacts/${id}`);
    const newList = this.state.list.filter(itm => {
      return itm.id !== id;
    });

    this.setState({ list: newList });
  };

  // updating
  updateItem = ({id}) => {
    console.log('update', id)
    // const obj = this.state.list.find(itm => itm.id === id);
    // this.history.push('/contacts/update');
  }




  //add data in local storage
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

    this.removeItem = this.removeItem.bind(this)
    this.updateItem = this.updateItem.bind(this)
    this.retrievedContacts = this.retrievedContacts.bind(this)
    this.addItem = this.addItem.bind(this)



    return (
      <React.Fragment>
        {/* {this.state.isLoading && <h1>Loading...</h1>}
        {this.state.isLoading === false && <h3>data loaded!</h3>} */}

        {this.state.isLoading ? (
          <h3>Loading.....</h3>
        ) : (
          <Switch>
            <Route
              path="/contacts"
              exact
              component={props => <ContactList {...props} list={this.state.list} 
              handleDelete={this.removeItem} 
              handleUpadate={this.updateItem}/>}
            />

            <Route path="/contacts/addcontact" exact>
              <Form handleChange={this.handleChange} addItem={this.addItem} name={this.state.name} email={this.state.email} btnName='Save'/>
            </Route>

            <Route path="/contacts/" component={Preview} />
          </Switch>
        )}
      </React.Fragment>
    );
  }
}

export default Contact;
