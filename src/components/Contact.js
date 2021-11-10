import React, { Component } from 'react';
import List from "./List";
import Form from "./Form";

class Contact extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            list: [{name: 'NIlay', email: 'adf@gad.com'},{name: 'NIlay', email: 'adf@gad.com'}],
        }
    }

    handleChange = (e) => {
        let value = e.target.value;
        let name = e.target.name;

        this.setState({
            [name] : [value],
        });

    }

    addItem = () => {
        const itm = {
            name: this.state.name,
            email: this.state.email,
        }
        // this.state.list.push(itm); //returns num of ele after push
        // this.setState({
        //     list: this.state.list.concat(itm),
        // });
        this.setState({
          list: [...this.state.list, itm],
        })
    }

  render() {
    return (
      <React.Fragment>
        <Form  handleChange={this.handleChange} addItem={this.addItem}/>

        <br/>
        <label>List</label><></>
        {this.state.list.map((itm, i) => <List key={i} name={itm.name} email={itm.email} />)}
      </React.Fragment>
    );
  }
}

export default Contact;
