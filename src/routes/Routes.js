import React from 'react';
import { Route, Switch } from 'react-router-dom';

// components
import Req from '../components/Req';
import Contact from '../components/Contact';
import Home from '../components/Home';
// import Form from '../components/Form';

const Routes = () => {
    
    return <>
    <Switch>
      <Route path="/" component={Home} exact/> 
      <Route path="/req" component={Req} exact/>
      {/* if component has sub routing then their should be like this */}
      <Route path="/contacts" component={Contact} exact/> 
      <Route path="/contacts/addcontact" component={Contact} exact/>
    </Switch>
  </>;
};

export default Routes;
