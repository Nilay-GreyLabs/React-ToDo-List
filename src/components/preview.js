import React, { Component } from "react";

class Preview extends Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log(this.props);
        const {name, email} = this.props.location.state.contact;
        return <div className='preview-card'>
            <div>{name}</div>
            <div>{email}</div>
        </div>
    }
}

export default Preview;