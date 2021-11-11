import React, { Component } from "react";
import {Link} from 'react-router-dom'

class List extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const {name, email, id} = this.props;
        return <React.Fragment>
            <div className='contactCard'>
            {/* <Link to={`/contacts/${id}`} > */}

            <Link to={{pathname: `/contacts/${id}`,
            state: {contact: this.props}}} >
                <h5>{name}</h5>
                <p>{email}</p>
            </Link>
            </div>
        </React.Fragment>
    }
}

export default List;