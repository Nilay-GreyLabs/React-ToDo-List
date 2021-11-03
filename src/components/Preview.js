import React, { Component } from 'react';

class Preview extends Component {
    constructor(props){
        super(props)
    }
  render() {
    return (
      <div className="preview">
        <label>Preview</label>
        <section style={this.props.style}>{this.props.text}</section>
      </div>
    );
  }
}

export default Preview;
