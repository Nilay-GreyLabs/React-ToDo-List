import React, { Component } from 'react';
import Routes from './routes/Routes';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Link style={{margin: '15px'}} to="/">Home</Link> 
          <Link style={{margin: '15px'}} to="/req">Requests</Link>
          <Link style={{margin: '15px'}} to="/contacts">Contacts</Link>
        </header>
        <hr/>
        <section>
            <Routes />
        </section>
      </div>
    );
  }
}

export default App;
