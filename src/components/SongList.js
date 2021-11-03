import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'react';

// components
import Form from "../components/Form";
import Preview from "../components/Preview";

// actions
import { addSong, removeSong, updateSong, editSong, cancelEdit, copyContent} from '../actions/songActions';

//alert module
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { CANCEL_EDIT } from '../actions/types';

const MySwal = withReactContent(Swal);

class SongList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newSong: '',
      currentValue: '',
      display: false,
      style: {
        color: 'white',
        wordBreak: 'break-all',
      }
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleChange = e => {
    let name = e.target.name;
    this.setState({ [name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const newSongToAdd = { title: this.state.newSong };
    if (this.state.newSong.length !== 0) {
      this.props.addSong(newSongToAdd);
    } else {
      MySwal.fire({
        title: '<p>todo Field is empty!</p>',
        icon: 'error',
      });
    }
    // MySwal.fire('hello');
    this.setState({ newSong: '' });
  };

  handleRemove = index => {
    this.props.removeSong(index);
    // console.log(index);
  };

  handleEdit = (index, title) => {
    // console.log(index, "title: ",title, "currentValue",this.state.currentValue)
    this.props.editSong(index);
    this.setState({ currentValue: title });
    this.setState({ display: true });
  };

  handleUpdate = i => {
    const updatedValue = this.state.currentValue;
    this.props.updateSong(i, updatedValue);
    this.setState({currentValue: ''});
    this.setState({display: false});
  };

  handleCancel = (i) => {
    this.setState({currentValue: ''});
    this.props.cancelEdit(i);
  }

  handleCopy = (title) => {
    this.props.copyContent(title);
  }

  render() {
    const { songs } = this.props.songs;
    return (
      <ul>
        {songs.map((song, i) => {
          return (
            <Fragment key={i}>

              {!song.editing ?
              (
                <li>
                    {song.title}
                    <span>
                        <button onClick={() => { this.handleRemove(i)}}> remove </button>
                        <button onClick={() => { this.handleEdit(i, song.title)}}> edit </button>
                        <button onClick={() => { this.handleCopy(song.title)}}> copy </button>
                    </span>
                </li>
              ) : (
                <li>
                    {/* {song.title} */}
                    <form onSubmit={this.handleUpdate, (e)=>{e.preventDefault()}}>
                        <input type="text" autoFocus={this.state.display} value={this.state.currentValue} name="currentValue" onChange={this.handleChange} />
                    </form>
                    <span>
                        <button onClick={() => { this.handleCancel(i)}}> cancel </button>
                        <button
                        onClick={() => {this.handleUpdate(i)}}> update </button>
                    </span>
                </li>
              )}
            </Fragment>
          );
        })}

        <Preview text={this.state.currentValue} style={this.state.style} />
        <Form onSubmit={this.handleSubmit} onChange={this.handleChange} value={this.state.newSong} autoFocus={!this.state.display} />
        
      </ul>
    );
  }
}

// <------------step 1-------> with the help of these we can use state and actions as a props

// mapStateToProps : Every time the state changes this function will be called

// has two params "state" and "ownProps"
// state : for when state changes
// ownProps : when current component receive props

const mapStateToProps = state => ({
  songs: state.songs, //name same as given in relevant reducers
});

// mapDispatchToProps : the action we need in our component to dispatch them and change our state

const mapDispatchToProps = {
  addSong,
  removeSong, 
  editSong, 
  cancelEdit, 
  updateSong,
  copyContent
}; //or just destructure actions as done already

//in case we don't have any actions then instead of mapDispatchToProps, null should be passed

export default connect(mapStateToProps, mapDispatchToProps)(SongList);

// export default connect(mapStateToProps, { addSong, removeSong, editSong, updateSong, cancelEdit, copyContent})(SongList); //alternate way using obj destructuring
