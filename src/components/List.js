import React, { Component } from "react";

class List extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const {name, email} = this.props;
        return <React.Fragment>
            <p>{name}, {email}</p>
        </React.Fragment>
    }
}

export default List;