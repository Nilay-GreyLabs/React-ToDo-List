import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SongList from "./components/SongList";

class App extends Component {
	constructor(props) {
	  super(props);
	  this.state = {};
	}
	render() {
	  return (
		  <SongList />
	  );
	}
  }

export default App;
