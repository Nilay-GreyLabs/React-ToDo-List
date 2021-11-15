import React, { Component } from "react";
import {Link} from 'react-router-dom';

class List extends Component{
    constructor(props){
        super(props)
    };

    render(){
        const {name, email, id} = this.props;

        // const handleDelete = () => {
        //     return this.props.handleDelete({id});
        // }
        // const handleUpdate = () => {
        //     return this.props.handleUpdate({id});
        // }
        const sendId = (id, action) => {
            if (action === 'delete') {
                return this.props.handleDelete(id);
            } else if(action === 'update') {
                return this.props.handleUpdate(id);
            }
        }

        return <React.Fragment>
            <div className='contactCard'>
            {/* <Link to={`/contacts/${id}`} /> */}

            <Link to={{pathname: `/contacts/details/${id}`, state: {contact: {name, email, id}}}} >
                <h5>{name}</h5>
                <p>{email}</p>
            </Link>
            {/* <span onClick={handleUpdate}><i className="fas fa-edit"></i></span> */}
            <span onClick={() => {sendId({id}, 'update')}}><i className="fas fa-edit"></i></span>
            <span onClick={() => {sendId({id}, 'delete')}}><i  className="fas fa-trash-alt"></i></span>
            </div>
        </React.Fragment>
    }
}

export default List;