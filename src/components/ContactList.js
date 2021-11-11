import React, { Component } from 'react';
import Card from './Card';
import {Link} from 'react-router-dom'; 

class ContactList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { list } = this.props;
    return (
      <>
        <h2>List</h2>
        {list.map((itm, i) => (
          <Card key={i} name={itm.name} email={itm.email} id={itm.id}/>
        ))}

        <Link to="/contacts/addcontact">
          <button>add contact</button>
        </Link>
      </>
    );
  }
}

export default ContactList;
