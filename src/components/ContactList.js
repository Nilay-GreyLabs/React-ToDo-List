import React, { Component } from 'react';
import Card from './Card';
import { Link } from 'react-router-dom';

class ContactList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { list, handleDelete, handleUpdate } = this.props;
    return (
      <section className="list">
        <h2>List</h2>
        {list.map((itm, i) => (
          <Card key={i} 
          name={itm.name} 
          email={itm.email} 
          id={itm.id} 
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
          />
        ))}

        <Link to="/contacts/addcontact">
          <button>add contact</button>
        </Link>
      </section>
    );
  }
}

export default ContactList;
