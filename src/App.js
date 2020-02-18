import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import './App.css';

function App() {

  return (
    <div className="App">
    <Router>
      <Navigation/>
      
        <Switch>
        <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;