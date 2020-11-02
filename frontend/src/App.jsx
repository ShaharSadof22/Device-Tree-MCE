import React from 'react';
import { Switch, Route } from 'react-router-dom';

import {NavBar} from './cmps/NavBar'
import { DeviceApp } from './pages/DeviceApp'
import { About } from './pages/About'

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <Switch>
        <Route component={About} path='/about' />
        <Route component={DeviceApp} path='/' />
      </Switch>
    </div>
  );
}

export default App;
