// App.js
import React from 'react';
import './App.css';
import Navbar from './Navbar';
import AboutMe from './AboutMe';
import Gallery from './Gallery'; 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <div>
          <Switch>

            <Route exact path="/gallery"> 
              <Gallery />
            </Route>

            <Route exact path="/AboutMe">
              <AboutMe />
            </Route>

          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
