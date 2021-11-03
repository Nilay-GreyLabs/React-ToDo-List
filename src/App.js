import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SongList from "./components/SongList";
import Input from "./components/Input";

class App extends Component {
	constructor(props) {
	  super(props);
	  this.state = {};
	}
	render() {
	  return (
		<>
		  <SongList />
		  {/* <Input /> */}
		</>
	  );
	}
  }

export default App;
