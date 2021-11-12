import React, { Component } from "react";
import {Link} from 'react-router-dom';

class List extends Component{
    constructor(props){
        super(props)
    }
    render(){
        
        const {name, email, id, handleDelete, handleUpdate} = this.props;
        const sendIdDel = () => {
            return handleDelete({id});
        }
        const sendIdUp = () => {
            return handleUpdate({id});
        }
        
        return <React.Fragment>
            <div className='contactCard'>
            {/* <Link to={`/contacts/${id}`} /> */}

            <Link to={{pathname: `/contacts/${id}`, state: {contact: {name, email, id}}}} >
                <h5>{name}</h5>
                <p>{email}</p>
            </Link>
            <span onClick={sendIdUp}><i className="fas fa-edit"></i></span>
            <span onClick={sendIdDel}><i  className="fas fa-trash-alt"></i></span>
            </div>
        </React.Fragment>
    }
}

export default List;