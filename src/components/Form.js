import React, {Component} from "react";

class Form extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <form onSubmit={this.props.onSubmit}>
                <input type="text" name="newSong" value={this.props.value} autoFocus={this.props.autoFocus} onChange={this.props.onChange} />
                <input type="submit" name="addSong" value="Add" />
            </form>
        )
    }
}

export default Form;